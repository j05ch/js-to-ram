import { Commands } from '../actions/commands';
import { Mode } from '../actions/mode';
import { Step } from '../actions/step';

function getMode(command: string) {
	if (command.startsWith('*')) {
		return Mode.INDIRECT;
	} else if (command.startsWith('=')) {
		return Mode.IMMEDIATE;
	} else {
		return Mode.STANDARD;
	}
}

function getArgument(mode: Mode, s: string) {
	if (mode === Mode.INDIRECT || mode === Mode.IMMEDIATE) {
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
	inputIndex: number | undefined,
	commandLine: string[],
	inputArr: string[],
	register: number[],
	step: Step,
	changedRegister: number[]
) {
	let argument: number = 0;
	let mode = Mode.STANDARD;
	if (commandLine[2]) {
		mode = getMode(commandLine[2].trim());
		argument = Number(getArgument(mode, commandLine[2].trim()));
	}
	const command = commandLine[1];
	let output;
	const ACC = 0;
	let acc = register[ACC];
	let isHalt = false;
	let input =
		inputIndex !== undefined ? Number(inputArr[inputIndex]) : undefined;

	switch (command) {
		case Commands.READ:
			{
				if (step === Step.NEXT) {
				}
				if (step === Step.REGISTER) {
					register[argument] = input || -1;
					changedRegister = [...changedRegister, argument];
					step = Step.PC;
					break;
				} else if (step === Step.INPUT) {
					if (inputIndex === undefined) {
						inputIndex = 0;
					} else {
						inputIndex++;
					}
					step = Step.REGISTER;
					break;
				} else if (step === Step.PC) {
					programCounter++;
					step = Step.NEXT;
					break;
				}
			}
			break;
		case Commands.WRITE:
			{
				if (mode === Mode.IMMEDIATE) {
					output = argument;
				} else if (mode === Mode.INDIRECT) {
					output = register[register[argument]];
					changedRegister = [...changedRegister, register[argument]];
				} else {
					output = register[argument];
					changedRegister = [...changedRegister, argument];
				}
				programCounter++;
			}
			break;
		case Commands.LOAD:
			{
				if (mode === Mode.IMMEDIATE) {
					acc = argument;
				} else if (mode === Mode.INDIRECT) {
					acc = register[register[argument]];
				} else {
					acc = register[argument];
				}
				changedRegister = [...changedRegister, ACC];
				programCounter++;
			}
			break;
		case Commands.STORE:
			{
				if (mode === Mode.INDIRECT) {
					register[register[argument]] = acc;
					changedRegister = [...changedRegister, register[argument]];
				} else {
					register[argument] = acc;
					changedRegister = [...changedRegister, argument];
				}
				programCounter++;
			}
			break;
		case Commands.ADD:
			{
				if (mode === Mode.IMMEDIATE) {
					acc += argument;
				} else if (mode === Mode.INDIRECT) {
					acc += register[register[argument]];
				} else {
					acc += register[argument];
				}
				changedRegister = [...changedRegister, ACC];
				programCounter++;
			}
			break;
		case Commands.SUB:
			{
				if (mode === Mode.IMMEDIATE) {
					acc -= argument;
				} else if (mode === Mode.INDIRECT) {
					acc -= register[register[argument]];
				} else {
					acc -= register[argument];
				}
				changedRegister = [...changedRegister, ACC];
				programCounter++;
			}
			break;
		case Commands.MULT:
			{
				if (mode === Mode.IMMEDIATE) {
					acc *= argument;
				} else if (mode === Mode.INDIRECT) {
					acc *= register[register[argument]];
				} else {
					acc *= register[argument];
				}
				changedRegister = [...changedRegister, ACC];
				programCounter++;
			}
			break;
		case Commands.DIV:
			{
				if (mode === Mode.IMMEDIATE) {
					acc /= argument;
				} else if (mode === Mode.INDIRECT) {
					acc /= register[register[argument]];
				} else {
					acc /= register[argument];
				}
				changedRegister = [...changedRegister, ACC];
				programCounter++;
			}
			break;
		case Commands.JUMP:
			{
				programCounter = argument;
			}
			break;
		case Commands.JZERO:
			{
				programCounter = acc === 0 ? argument : programCounter + 1;
			}
			break;
		case Commands.JGTZ:
			{
				programCounter = acc > 0 ? argument : programCounter + 1;
			}
			break;
		case Commands.HALT:
			{
				isHalt = true;
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
		programCounter,
		inputIndex,
		register,
		output,
		isHalt,
		changedRegister,
		step,
	};
}

/*import { Commands } from '../actions/commands';
import { Mode } from '../actions/mode';
import { Step } from '../actions/step';

function getMode(command: string) {
	if (command.startsWith('*')) {
		return Mode.INDIRECT;
	} else if (command.startsWith('=')) {
		return Mode.IMMEDIATE;
	} else {
		return Mode.STANDARD;
	}
}

function getArgument(mode: Mode, s: string) {
	if (mode === Mode.INDIRECT || mode === Mode.IMMEDIATE) {
		return s.substr(1);
	} else {
		return s;
	}
}

/!**
 * Here goes the business logic of the random access machine
 * @param programCounter {number}
 * @param inputIndex {number | undefined}
 * @param commandLine {string[]}
 * @param inputArr {string[]}
 * @param register {number[]}
 * @returns {{number, number, number[], number}}
 *!/
export function runMachine(
	programCounter: number,
	inputIndex: number | undefined,
	commandLine: string[],
	inputArr: string[],
	register: number[],
	step: Step,
	changedRegister: number[]
) {
	let pc = programCounter;
	let argument: number = 0;
	let mode = Mode.STANDARD;
	if (commandLine[2]) {
		mode = getMode(commandLine[2].trim());
		argument = Number(getArgument(mode, commandLine[2].trim()));
	}
	const command = commandLine[1];
	let output;
	const ACC = 0;
	let acc = register[ACC];
	let isHalt = false;
	let input = inputIndex !== undefined ? Number(inputArr[inputIndex]) : undefined;

	switch (command) {
		case Commands.READ: {
			if (step === Step.REGISTER) {
				register[argument] = input || -1;
				changedRegister = [...changedRegister, argument];
				step = Step.PC;
				break;
			} else if (step === Step.INPUT) {
				if (inputIndex === undefined) {
					inputIndex = 0;
				} else {
					inputIndex++;
				}
				step = Step.REGISTER
				break;
			} else if (step === Step.PC) {
				pc++;
				step = Step.NEXT;
				break;
			}
		}
			break;
		case Commands.WRITE: {
			if (mode === Mode.IMMEDIATE) {
				output = argument;
			} else if (mode === Mode.INDIRECT) {
				output = register[register[argument]];
				changedRegister = [...changedRegister, register[argument]];
			} else {
				output = register[argument];
				changedRegister = [...changedRegister, argument];
			}
			pc++;
		}
			break;
		case Commands.LOAD: {
			if (mode === Mode.IMMEDIATE) {
				acc = argument;
			} else if (mode === Mode.INDIRECT) {
				acc = register[register[argument]];
			} else {
				acc = register[argument];
			}
			changedRegister = [...changedRegister, ACC];
			pc++;
		}
			break;
		case Commands.STORE: {
			if (mode === Mode.INDIRECT) {
				register[register[argument]] = acc;
				changedRegister = [...changedRegister, register[argument]];
			} else {
				register[argument] = acc;
				changedRegister = [...changedRegister, argument];
			}
			pc++;
		}
			break;
		case Commands.ADD: {
			if (mode === Mode.IMMEDIATE) {
				acc += argument;
			} else if (mode === Mode.INDIRECT) {
				acc += register[register[argument]];
			} else {
				acc += register[argument];
			}
			changedRegister = [...changedRegister, ACC];
			pc++;
		}
			break;
		case Commands.SUB: {
			if (mode === Mode.IMMEDIATE) {
				acc -= argument;
			} else if (mode === Mode.INDIRECT) {
				acc -= register[register[argument]];
			} else {
				acc -= register[argument];
			}
			changedRegister = [...changedRegister, ACC];
			pc++;
		}
			break;
		case Commands.MULT: {
			if (mode === Mode.IMMEDIATE) {
				acc *= argument;
			} else if (mode === Mode.INDIRECT) {
				acc *= register[register[argument]];
			} else {
				acc *= register[argument];
			}
			changedRegister = [...changedRegister, ACC];
			pc++;
		}
			break;
		case Commands.DIV: {
			if (mode === Mode.IMMEDIATE) {
				acc /= argument;
			} else if (mode === Mode.INDIRECT) {
				acc /= register[register[argument]];
			} else {
				acc /= register[argument];
			}
			changedRegister = [...changedRegister, ACC];
			pc++;
		}
			break;
		case Commands.JUMP: {
			pc = argument;
		}
			break;
		case Commands.JZERO: {
			pc = acc === 0 ? argument : pc + 1;
		}
			break;
		case Commands.JGTZ: {
			pc = acc > 0 ? argument : pc + 1;
		}
			break;
		case Commands.HALT: {
			isHalt = true;
		}
			break;
		default: {
			console.error('Program error');
		}
			break;
	}

	register[0] = acc;

	return {
		programCounter: pc,
		inputIndex,
		register,
		output,
		isHalt,
		changedRegister,
		step,
	};
}*/
