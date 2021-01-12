import * as React from 'react';
import ProgramContainer from '../program-container';
import { useState } from 'react';
import { useInterval } from '../../hooks/useInterval';
import { runMachine } from '../../utils/runMachine';
import ProgramCounterContainer from '../program-counter-container';
import CpuContainer from '../cpu-container';
import RegisterContainer from '../register-container';
import './index.css';
import InputContainer from '../input-container';

interface Props {
	programArray: string[][];
	inputArray: string[];
}

const MachineContainer: React.FC<Props> = ({ programArray, inputArray }) => {
	const [pc, setPc] = useState(0);
	const [inputIndex, setInputIndex] = useState(0);
	const [register, setRegister] = useState<number[]>([0]);

	useInterval(() => {
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
	}, 2000);

	return (
		<div className="dark:text-blue-50 grid-container">
			<div className="dark:bg-red-800 input">
				<InputContainer />
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
			<div className="dark:bg-red-800 output">OUTPUT</div>
		</div>
	);
};

export default MachineContainer;
