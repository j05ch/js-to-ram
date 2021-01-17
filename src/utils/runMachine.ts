import { Commands } from '../actions/commands';

enum MODE {
	INDIRECT,
	IMMEDIATE,
	STANDARD,
}

function getMode(command: string) {
	if (command.startsWith('*')) {
		return MODE.INDIRECT;
	} else if (command.startsWith('=')) {
		return MODE.IMMEDIATE;
	} else {
		return MODE.STANDARD;
	}
}

function getArgument(mode: MODE, s: string) {
	if (mode === MODE.INDIRECT || mode === MODE.IMMEDIATE) {
		return s.substr(1);
	} else {
		return s;
	}
}

/**
 * Here goes the business logic of the random access machine
 * @param programCounter {number}
 * @param inputIndex {number}
 * @param commandLine {string[]}
 * @param input {number}
 * @param register {number[]}
 * @returns {{number, number, number[], number}}
 */
export function runMachine(
	programCounter: number,
	inputIndex: number,
	commandLine: string[],
	input: number,
	register: number[]
) {
	let pc = programCounter;
	let ii = inputIndex;
	let argument: number = 0;
	let mode = MODE.STANDARD;
	if (commandLine[2]) {
		mode = getMode(commandLine[2].trim());
		argument = Number(getArgument(mode, commandLine[2].trim()));
	}
	const command = commandLine[1];
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
				if (mode === MODE.IMMEDIATE) {
					output = argument;
				} else if (mode === MODE.INDIRECT) {
					output = register[register[argument]];
				} else {
					output = register[argument];
				}
				pc++;
			}
			break;
		case Commands.LOAD:
			{
				if (mode === MODE.IMMEDIATE) {
					acc = argument;
				} else if (mode === MODE.INDIRECT) {
					acc = register[register[argument]];
				} else {
					acc = register[argument];
				}
				pc++;
			}
			break;
		case Commands.STORE:
			{
				if (mode === MODE.INDIRECT) {
					register[register[argument]] = acc;
				} else register[argument] = acc;
				pc++;
			}
			break;
		case Commands.ADD:
			{
				if (mode === MODE.IMMEDIATE) {
					acc += argument;
				} else if (mode === MODE.INDIRECT) {
					acc += register[register[argument]];
				} else {
					acc += register[argument];
				}
				pc++;
			}
			break;
		case Commands.SUB:
			{
				if (mode === MODE.IMMEDIATE) {
					acc -= argument;
				} else if (mode === MODE.INDIRECT) {
					acc -= register[register[argument]];
				} else {
					acc -= register[argument];
				}
				pc++;
			}
			break;
		case Commands.MULT:
			{
				if (mode === MODE.IMMEDIATE) {
					acc *= argument;
				} else if (mode === MODE.INDIRECT) {
					acc *= register[register[argument]];
				} else {
					acc *= register[argument];
				}
				pc++;
			}
			break;
		case Commands.DIV:
			{
				if (mode === MODE.IMMEDIATE) {
					acc /= argument;
				} else if (mode === MODE.INDIRECT) {
					acc /= register[register[argument]];
				} else {
					acc /= register[argument];
				}
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
				console.log('Program Halt');
			}
			break;
		default:
			{
				console.error('Program error');
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
