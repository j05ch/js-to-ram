import * as React from 'react';
import ProgramContainer from '../program-container';
import { useState } from 'react';
import { useInterval } from '../../hooks/useInterval';
import { runMachine } from '../../utils/runMachine';
import ProgramCounterContainer from '../program-counter-container';
import CpuContainer from '../cpu-container';
import RegisterContainer from '../register-container';

interface Props {
	programArray: string[][];
}

const MachineContainer: React.FC<Props> = ({ programArray }) => {
	const [pc, setPc] = useState(0);
	const [register, setRegister] = useState<number[]>([]);

	useInterval(() => {
		const commandLine = programArray[pc];
		const result = runMachine(
			pc,
			commandLine,
			Math.random() * 100,
			register
		);
		setPc(result.programCounter);
		setRegister(result.register);
		console.log(result.programCounter);
		console.log(register);
	}, 2000);

	return (
		<div className="dark:text-blue-50">
			<CpuContainer />
			<ProgramCounterContainer programCounter={pc} />
			<ProgramContainer programArray={programArray} programCounter={pc} />
			<RegisterContainer />
		</div>
	);
};

export default MachineContainer;
