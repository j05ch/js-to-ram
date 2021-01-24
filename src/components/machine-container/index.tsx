import * as React from 'react';
import ProgramContainer from '../program-container';
import { useEffect, useState } from 'react';
import { useInterval } from '../../hooks/useInterval';
import { runMachine } from '../../utils/runMachine';
import ProgramCounterContainer from '../program-counter-container';
import CpuContainer from '../cpu-container';
import RegisterContainer from '../register-container';
import './index.css';
import DisplayContainer from '../display-container';
import { labels } from '../../models/labels';
import MachineControl from '../machine-control';

interface Props {
	programArray: string[][];
	inputArray: string[];
}

const MachineContainer: React.FC<Props> = ({ programArray, inputArray }) => {
	const [pc, setPc] = useState(0);
	const [inputIndex, setInputIndex] = useState(0);
	const [register, setRegister] = useState<number[]>([0]);
	const [outputArray, setOutputArray] = useState<string[]>([]);
	const [locale, setLocale] = useState('DE');
	const [delay, setDelay] = useState(5000);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => setLocale('DE'), [locale]);

	useInterval(machineStep, isRunning ? delay : null);

	function machineStep() {
		const commandLine = programArray[pc];
		const result = runMachine(
			pc,
			inputIndex,
			commandLine,
			Number(inputArray[inputIndex]),
			register
		);
		setPc(result.programCounter);
		setRegister(result.register);
		setInputIndex(result.inputIndex);
		if (result.output !== undefined) {
			setOutputArray([...outputArray, String(result.output)]);
		}
	}

	return (
		<div className="dark:text-blue-50 grid-container">
			<div className="dark:bg-red-800 input">
				<DisplayContainer
					inputArray={inputArray}
					inputIndex={inputIndex}
					headerLabel={labels[locale].INPUT_CONTAINER_HEADER}
				/>
			</div>
			<div className="dark:bg-pink-500 cpu">
				<CpuContainer />
			</div>
			<div className="dark:bg-blue-700 program-counter">
				<ProgramCounterContainer programCounter={pc} />
			</div>
			<div className="dark:bg-green-700 program">
				<ProgramContainer
					programArray={programArray}
					programCounter={pc}
				/>
			</div>
			<div className="dark:bg-gray-700 register">
				<RegisterContainer register={register} programCounter={pc} />
			</div>
			<div className="dark:bg-red-800 output">
				<DisplayContainer
					inputArray={outputArray}
					inputIndex={outputArray.length - 1}
					headerLabel={labels[locale].OUTPUT_CONTAINER_HEADER}
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
