import { Commands } from '../actions/commands';

export function runMachine(
	programCounter: number,
	commandLine: string[],
	input: number,
	register: number[]
) {
	let pc = programCounter;
	const command = commandLine[1];
	const argument = Number(commandLine[2]);
	let output;
	let acc = register[0];

	switch (command) {
		case Commands.READ:
			{
				register[argument] = input;
				pc++;
			}
			break;
		case Commands.WRITE:
			{
				output = register[argument];
			}
			break;
		case Commands.LOAD:
			{
				acc = register[argument];
			}
			break;
		case Commands.STORE:
			{
				register[argument] = acc;
			}
			break;
		case Commands.ADD:
			{
				acc += register[argument];
			}
			break;
		case Commands.SUB:
			{
				acc -= register[argument];
			}
			break;
		case Commands.MULT:
			{
				acc *= register[argument];
			}
			break;
		case Commands.DIV:
			{
				acc /= register[argument];
			}
			break;
		case Commands.JUMP:
			{
				pc = argument;
			}
			break;
		case Commands.JZERO:
			{
				pc = acc === 0 ? argument : pc;
			}
			break;
		case Commands.JGTZ:
			{
				pc = acc > 0 ? argument : pc;
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
		register: register,
		output: output,
	};
}
