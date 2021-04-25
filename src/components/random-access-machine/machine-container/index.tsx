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
import { DE } from '../../../models/locales';

interface Props {
	programArray: string[][];
	inputArray: string[];
	isRamRunning: boolean;
	setIsRamRunning: React.Dispatch<React.SetStateAction<boolean>>;
	setIsJsRunning: React.Dispatch<React.SetStateAction<boolean>>;
	extended?: boolean;
	pc: number;
	breakPc: number;
	setIsRamControlDisabled: React.Dispatch<React.SetStateAction<boolean>>;
	setIsJsControlDisabled: React.Dispatch<React.SetStateAction<boolean>>;
	isRamControlDisabled: boolean;
	isJsControlDisabled: boolean;
}

const INITIAL_DELAY = 2000;

const MachineContainer: React.FC<Props> = ({
	programArray,
	inputArray,
	isRamRunning,
	setIsRamRunning,
	setIsJsRunning,
	extended,
	pc,
	breakPc,
	isRamControlDisabled,
	setIsRamControlDisabled,
	isJsControlDisabled,
	setIsJsControlDisabled,
}) => {
	const [programCounter, setProgramCounter] = useState<number | undefined>();
	const [programCounterMark, setProgramCounterMark] = useState(false);
	const [programMark, setProgramMark] = useState(false);
	const [inputIndex, setInputIndex] = useState<number | undefined>();
	const [programIndex, setProgramIndex] = useState<number | undefined>();
	const [inputMark, setInputMark] = useState(false);
	const [outputMark, setOutputMark] = useState(false);
	const [register, setRegister] = useState<number[]>([0]);
	const [outputArray, setOutputArray] = useState<string[]>([]);
	const [locale, setLocale] = useState(DE);
	const [delay, setDelay] = useState(INITIAL_DELAY);
	const [step, setStep] = useState(Step.INITIAL);
	const [changedRegister, setChangedRegister] = useState<number[]>([]);
	const isBreak = breakPc > -1;

	useEffect(() => setLocale(DE), [locale]);

	useInterval(machineStep, isRamRunning ? delay : null);

	function clearMarks() {
		setProgramMark(false);
		setInputMark(false);
		setOutputMark(false);
		setChangedRegister([]);
	}

	function machineStep() {
		if (step === Step.INITIAL) {
			setProgramCounter(pc);
			setProgramIndex(pc);
			setProgramCounterMark(true);
			setStep(Step.PROGRAM);
			return;
		}
		if (step === Step.CLEAR) {
			clearMarks();
			setStep(Step.NEXT);
			if (isBreak && programCounter && programCounter >= breakPc + 1) {
				setIsRamRunning(false);
				setIsJsRunning(true);
				setIsRamControlDisabled(true);
				setIsJsControlDisabled(false);
			}
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
			setIsRamControlDisabled(true);
			setIsRamRunning(false);
		}
	}

	const animate = isRamRunning ? 'animate-pulse' : '';

	return (
		<div className="max-w-screen-md m-2 rounded bg-white">
			<div className="text-blue-50 grid-container rounded m-4 bg-gray-100">
				<div className="bg-gray-500 input">
					<DisplayContainer
						inputArray={inputArray}
						inputIndex={inputIndex}
						headerLabel={labels[locale].INPUT_CONTAINER_HEADER}
						mark={inputMark}
					/>
				</div>
				<div className={`bg-pink-500 cpu ${animate}`}>
					<CpuContainer />
				</div>
				<div className="bg-gray-300 program-counter">
					<ProgramCounterContainer
						programCounter={programCounter}
						mark={programCounterMark}
					/>
				</div>
				<div className="bg-gray-300 program">
					<ProgramContainer
						programArray={programArray}
						programCounter={programIndex}
						mark={programMark}
					/>
				</div>
				<div className="bg-gray-300 register">
					<RegisterContainer
						register={register}
						changed={changedRegister}
					/>
				</div>
				<div className="bg-gray-500 output">
					<DisplayContainer
						inputArray={outputArray}
						inputIndex={outputArray.length - 1}
						headerLabel={labels[locale].OUTPUT_CONTAINER_HEADER}
						mark={outputMark}
					/>
				</div>
				<div className="bg-gray-100 control p-2">
					<MachineControl
						delay={delay}
						setDelay={setDelay}
						isRunning={isRamRunning}
						setIsRunning={setIsRamRunning}
						doStep={machineStep}
						disabled={isRamControlDisabled}
					/>
				</div>
			</div>
		</div>
	);
};

export default MachineContainer;
