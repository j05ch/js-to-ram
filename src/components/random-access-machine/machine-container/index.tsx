import * as React from 'react';
import { useEffect, useState } from 'react';
import ProgramContainer from '../program-container';
import { useInterval } from '../../../hooks/useInterval';
import { runMachine } from '../../../utils/runMachine';
import ProgramCounterContainer from '../program-counter-container';
import CpuContainer from '../cpu-container';
import RegisterContainer from '../register-container';
import './index.css';
import DisplayContainer from '../display-container';
import { labels } from '../../../models/labels';
import MachineControl from '../machine-control';
import { Step } from '../../../actions/step';

interface Props {
	programArray: string[][];
	inputArray: string[];
}

const INITIAL_DELAY = 5000;

const MachineContainer: React.FC<Props> = ({ programArray, inputArray }) => {
	const [programCounter, setProgramCounter] = useState<number | undefined>();
	const [programCounterMark, setProgramCounterMark] = useState(false);
	const [programMark, setProgramMark] = useState(false);
	const [inputIndex, setInputIndex] = useState<number | undefined>();
	const [programIndex, setProgramIndex] = useState<number | undefined>();
	const [inputMark, setInputMark] = useState(false);
	const [outputMark, setOutputMark] = useState(false);
	const [register, setRegister] = useState<number[]>([0]);
	const [outputArray, setOutputArray] = useState<string[]>([]);
	const [locale, setLocale] = useState('DE');
	const [delay, setDelay] = useState(INITIAL_DELAY);
	const [isRunning, setIsRunning] = useState(false);
	const [step, setStep] = useState(Step.INITIAL);
	const [changedRegister, setChangedRegister] = useState<number[]>([]);

	useEffect(() => setLocale('DE'), [locale]);

	useInterval(machineStep, isRunning ? delay : null);

	function clearMarks() {
		setProgramMark(false);
		setInputMark(false);
		setChangedRegister([]);
	}

	function machineStep() {
		if (step === Step.INITIAL) {
			setProgramCounter(0);
			setProgramIndex(0);
			setProgramCounterMark(true);
			setStep(Step.PROGRAM);
			return;
		}
		if (step === Step.CLEAR) {
			clearMarks();
			setStep(Step.NEXT);
			return;
		}
		const commandLine = programArray[programCounter || 0];
		const result = runMachine(
			programCounter || 0,
			inputIndex,
			commandLine,
			inputArray,
			register,
			step,
			changedRegister,
			programCounterMark,
			programMark,
			outputMark,
			inputMark,
			programIndex || 0
		);
		setProgramMark(result.programMark);
		setInputMark(result.inputMark);
		setOutputMark(result.outputMark);
		setProgramCounterMark(result.pcMark);
		setProgramCounter(result.programCounter);
		setRegister(result.register);
		setInputIndex(result.inputIndex);
		setProgramIndex(result.programIndex);
		setStep(result.step);
		setChangedRegister(result.changedRegister);
		if (result.output !== undefined) {
			setOutputArray([...outputArray, String(result.output)]);
		}
		if (result.isHalt) {
			setIsRunning(false);
		}
	}

	return (
		<div className="dark:text-blue-50 grid-container">
			<div className="dark:bg-red-800 input">
				<DisplayContainer
					inputArray={inputArray}
					inputIndex={inputIndex}
					headerLabel={labels[locale].INPUT_CONTAINER_HEADER}
					mark={inputMark}
				/>
			</div>
			<div className="dark:bg-pink-500 cpu">
				<CpuContainer />
			</div>
			<div className="dark:bg-blue-700 program-counter">
				<ProgramCounterContainer
					programCounter={programCounter}
					mark={programCounterMark}
				/>
			</div>
			<div className="dark:bg-green-700 program">
				<ProgramContainer
					programArray={programArray}
					programCounter={programIndex}
					mark={programMark}
				/>
			</div>
			<div className="dark:bg-gray-700 register">
				<RegisterContainer
					register={register}
					changed={changedRegister}
				/>
			</div>
			<div className="dark:bg-red-800 output">
				<DisplayContainer
					inputArray={outputArray}
					inputIndex={outputArray.length - 1}
					headerLabel={labels[locale].OUTPUT_CONTAINER_HEADER}
					mark={outputMark}
				/>
			</div>
			<div className="dark:bg-blue-400 control">
				<MachineControl
					delay={delay}
					setDelay={setDelay}
					isRunning={isRunning}
					setIsRunning={setIsRunning}
					doStep={machineStep}
				/>
			</div>
		</div>
	);
};

export default MachineContainer;