import * as React from 'react';
import Debug from '../debug/debug';
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

	return (
		<div className="dark:text-blue-50">
			<Debug data={programArray} />
			<CpuContainer />
			<ProgramCounterContainer programCounter={pc} />
			<ProgramContainer programArray={programArray} programCounter={pc} />
			<RegisterContainer />
		</div>
	);
};

export default MachineContainer;
