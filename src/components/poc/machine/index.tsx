import * as React from 'react';
import { useInterval } from '../../../hooks/useInterval';
import { useState } from 'react';
import { runMachine } from '../../../utils/runMachine';
import { Step } from '../../../actions/step';

const Machine: React.FC = (props) => {
	const [pc, setPc] = useState(0);
	const [register, setRegister] = useState<number[]>([]);
	const exampleProg = [
		['0', 'READ', '1'],
		['1', 'READ', '2'],
		['2', 'READ', '3'],
		['3', 'READ', '4'],
		['4', 'READ', '5'],
		['5', 'READ', '6'],
		['6', 'HALT', ''],
	];

	useInterval(() => {
		const commandLine = exampleProg[pc];
		const result = runMachine(
			pc,
			1,
			commandLine,
			[],
			register,
			Step.REGISTER,
			[],
			true,
			true,
			true,
			true,
			0
		);
		setPc(result.programCounter);
		setRegister(result.register);
		console.log(result.programCounter);
		console.log(register);
	}, 1000);
	return <div>{pc}</div>;
};

export default Machine;
