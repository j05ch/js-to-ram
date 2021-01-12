import { Commands } from '../actions/commands';

export function runMachine(
	programCounter: number,
	inputIndex: number,
	commandLine: string[],
	input: number,
	register: number[]
) {
	let pc = programCounter;
	let ii = inputIndex;
	const command = commandLine[1];
	const argument = Number(commandLine[2]);
	let output;
	let acc = register[0];

	switch (command) {
		case Commands.READ:
			{
				register[argument] = input;
				ii++;
				pc++;
			}
			break;
		case Commands.WRITE:
			{
				output = register[argument];
				pc++;
			}
			break;
		case Commands.LOAD:
			{
				acc = register[argument];
				pc++;
			}
			break;
		case Commands.STORE:
			{
				register[argument] = acc;
				pc++;
			}
			break;
		case Commands.ADD:
			{
				acc += register[argument];
				pc++;
			}
			break;
		case Commands.SUB:
			{
				acc -= register[argument];
				pc++;
			}
			break;
		case Commands.MULT:
			{
				acc *= register[argument];
				pc++;
			}
			break;
		case Commands.DIV:
			{
				acc /= register[argument];
				pc++;
			}
			break;
		case Commands.JUMP:
			{
				pc = argument;
			}
			break;
		case Commands.JZERO:
			{
				pc = acc === 0 ? argument : pc + 1;
			}
			break;
		case Commands.JGTZ:
			{
				pc = acc > 0 ? argument : pc + 1;
			}
			break;
		case Commands.HALT:
			{
			}
			break;
		default:
			{
			}
			break;
	}

	register[0] = acc;

	return {
		programCounter: pc,
		inputIndex: ii,
		register: register,
		output: output,
	};
}
