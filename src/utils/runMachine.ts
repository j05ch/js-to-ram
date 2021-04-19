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
	changedRegister: number[],
	pcMark: boolean,
	programMark: boolean,
	inputMark: boolean,
	outputMark: boolean,
	programIndex: number
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
	const ii = inputIndex === undefined ? 0 : inputIndex;
	let input = Number(inputArr[ii]);

	switch (command) {
		case Commands.READ:
			{
				if (step === Step.PROGRAM || step === Step.NEXT) {
					programIndex = programCounter;
					programMark = true;
					pcMark = false;
					step = Step.INPUT;
					break;
				}
				if (step === Step.INPUT) {
					inputIndex = inputIndex === undefined ? 0 : ++inputIndex;
					inputMark = true;
					step = Step.REGISTER;
					break;
				}
				if (step === Step.REGISTER) {
					acc = argument === ACC ? input : acc;
					register[argument] = input;
					changedRegister = [...changedRegister, argument];
					step = Step.PC;
					console.log(
						'Argument, changed register, acc, input',
						argument,
						changedRegister,
						register[argument],
						input
					);
					break;
				}
				if (step === Step.PC) {
					programCounter++;
					pcMark = true;
					step = Step.CLEAR;
					break;
				}
			}
			break;
		case Commands.WRITE:
			{
				if (step === Step.PROGRAM || step === Step.NEXT) {
					programIndex = programCounter;
					programMark = true;
					pcMark = false;
					if (mode === Mode.IMMEDIATE) {
						step = Step.OUTPUT;
					}
					if (mode === Mode.INDIRECT) {
						step = Step.REGISTER;
					}
					if (mode === Mode.STANDARD) {
						step = Step.REGISTER;
					}
					break;
				}
				if (step === Step.REGISTER) {
					if (mode === Mode.INDIRECT) {
						changedRegister = [...changedRegister, argument];
						step = Step.REGISTER_2;
					}
					if (mode === Mode.STANDARD) {
						changedRegister = [...changedRegister, argument];
						step = Step.REGISTER_2;
					}
					break;
				}
				if (step === Step.REGISTER_2) {
					changedRegister = [...changedRegister, register[argument]];
					step = Step.OUTPUT;
					break;
				}
				if (step === Step.OUTPUT) {
					if (mode === Mode.INDIRECT) {
						outputMark = true;
						output = register[register[argument]];
					}
					if (mode === Mode.IMMEDIATE) {
						outputMark = true;
						output = argument;
					}
					if (mode === Mode.STANDARD) {
						outputMark = true;
						output = register[argument];
					}
					step = Step.PC;
					break;
				}
				if (step === Step.PC) {
					programCounter++;
					pcMark = true;
					step = Step.CLEAR;
					break;
				}
			}
			break;
		case Commands.LOAD:
			{
				if (step === Step.PROGRAM || step === Step.NEXT) {
					programIndex = programCounter;
					programMark = true;
					pcMark = false;
					step = Step.REGISTER;
					break;
				}
				if (step === Step.REGISTER) {
					if (mode === Mode.INDIRECT) {
						changedRegister = [...changedRegister, argument];
						step = Step.REGISTER_2;
					}
					if (mode === Mode.STANDARD) {
						changedRegister = [...changedRegister, argument];
						step = Step.ACC;
					}
					if (mode === Mode.IMMEDIATE) {
						changedRegister = [...changedRegister, ACC];
						step = Step.ACC;
					}
					break;
				}
				if (step === Step.ACC) {
					if (mode === Mode.IMMEDIATE) {
						acc = argument;
					}
					if (mode === Mode.INDIRECT) {
						acc = register[register[argument]];
					}
					if (mode === Mode.STANDARD) {
						acc = register[argument];
					}
					step = Step.PC;
					break;
				}
				if (step === Step.PC) {
					programCounter++;
					pcMark = true;
					step = Step.CLEAR;
					break;
				}
			}
			break;
		case Commands.STORE:
			{
				if (step === Step.PROGRAM || step === Step.NEXT) {
					programIndex = programCounter;
					programMark = true;
					pcMark = false;
					step = Step.ACC;
					break;
				}
				if (step === Step.ACC) {
					if (mode === Mode.INDIRECT) {
						step = Step.REGISTER;
					}
					if (mode === Mode.STANDARD) {
						step = Step.REGISTER;
					}
					changedRegister = [...changedRegister, ACC];
					break;
				}
				if (step === Step.REGISTER) {
					if (mode === Mode.INDIRECT) {
						changedRegister = [...changedRegister, argument];
						step = Step.REGISTER_2;
					}
					if (mode === Mode.STANDARD) {
						register[argument] = acc;
						changedRegister = [...changedRegister, argument];
						step = Step.PC;
					}
					break;
				}
				if (step === Step.REGISTER_2) {
					register[register[argument]] = acc;
					changedRegister = [...changedRegister, register[argument]];
					step = Step.PC;
					break;
				}
				if (step === Step.PC) {
					programCounter++;
					pcMark = true;
					step = Step.CLEAR;
					break;
				}
			}
			break;
		case Commands.ADD:
			{
				if (step === Step.PROGRAM || step === Step.NEXT) {
					programIndex = programCounter;
					programMark = true;
					pcMark = false;
					if (mode === Mode.IMMEDIATE) {
						step = Step.ACC;
					}
					if (mode === Mode.STANDARD || mode === Mode.INDIRECT) {
						step = Step.REGISTER;
					}
					break;
				}
				if (step === Step.REGISTER) {
					if (mode === Mode.INDIRECT) {
						changedRegister = [...changedRegister, argument];
						step = Step.REGISTER_2;
					}
					if (mode === Mode.STANDARD) {
						changedRegister = [...changedRegister, argument];
						step = Step.ACC;
					}
					break;
				}
				if (step === Step.REGISTER_2) {
					changedRegister = [...changedRegister, register[argument]];
					step = Step.ACC;
					break;
				}
				if (step === Step.ACC) {
					if (mode === Mode.INDIRECT) {
						acc += register[register[argument]];
					}
					if (mode === Mode.STANDARD) {
						acc += register[argument];
					}
					if (mode === Mode.IMMEDIATE) {
						acc += argument;
					}
					changedRegister = [...changedRegister, ACC];
					step = Step.PC;
					break;
				}
				if (step === Step.PC) {
					programCounter++;
					pcMark = true;
					step = Step.CLEAR;
					break;
				}
			}
			break;
		case Commands.SUB:
			{
				if (step === Step.PROGRAM || step === Step.NEXT) {
					programIndex = programCounter;
					programMark = true;
					pcMark = false;
					if (mode === Mode.IMMEDIATE) {
						step = Step.ACC;
					}
					if (mode === Mode.STANDARD || mode === Mode.INDIRECT) {
						step = Step.REGISTER;
					}
					break;
				}
				if (step === Step.REGISTER) {
					if (mode === Mode.INDIRECT) {
						changedRegister = [...changedRegister, argument];
						step = Step.REGISTER_2;
					}
					if (mode === Mode.STANDARD) {
						changedRegister = [...changedRegister, argument];
						step = Step.ACC;
					}
					break;
				}
				if (step === Step.REGISTER_2) {
					changedRegister = [...changedRegister, register[argument]];
					step = Step.ACC;
					break;
				}
				if (step === Step.ACC) {
					if (mode === Mode.INDIRECT) {
						acc -= register[register[argument]];
					}
					if (mode === Mode.STANDARD) {
						acc -= register[argument];
					}
					if (mode === Mode.IMMEDIATE) {
						acc -= argument;
					}
					changedRegister = [...changedRegister, ACC];
					step = Step.PC;
					break;
				}
				if (step === Step.PC) {
					programCounter++;
					pcMark = true;
					step = Step.CLEAR;
					break;
				}
			}
			break;
		case Commands.MULT:
			{
				if (step === Step.PROGRAM || step === Step.NEXT) {
					programIndex = programCounter;
					programMark = true;
					pcMark = false;
					if (mode === Mode.IMMEDIATE) {
						step = Step.ACC;
					}
					if (mode === Mode.STANDARD || mode === Mode.INDIRECT) {
						step = Step.REGISTER;
					}
					break;
				}
				if (step === Step.REGISTER) {
					if (mode === Mode.INDIRECT) {
						changedRegister = [...changedRegister, argument];
						step = Step.REGISTER_2;
					}
					if (mode === Mode.STANDARD) {
						changedRegister = [...changedRegister, argument];
						step = Step.ACC;
					}
					break;
				}
				if (step === Step.REGISTER_2) {
					changedRegister = [...changedRegister, register[argument]];
					step = Step.ACC;
					break;
				}
				if (step === Step.ACC) {
					if (mode === Mode.INDIRECT) {
						acc *= register[register[argument]];
					}
					if (mode === Mode.STANDARD) {
						acc *= register[argument];
					}
					if (mode === Mode.IMMEDIATE) {
						acc *= argument;
					}
					changedRegister = [...changedRegister, ACC];
					step = Step.PC;
					break;
				}
				if (step === Step.PC) {
					programCounter++;
					pcMark = true;
					step = Step.CLEAR;
					break;
				}
			}
			break;
		case Commands.DIV:
			{
				if (step === Step.PROGRAM || step === Step.NEXT) {
					programIndex = programCounter;
					programMark = true;
					pcMark = false;
					if (mode === Mode.IMMEDIATE) {
						step = Step.ACC;
					}
					if (mode === Mode.STANDARD || mode === Mode.INDIRECT) {
						step = Step.REGISTER;
					}
					break;
				}
				if (step === Step.REGISTER) {
					if (mode === Mode.INDIRECT) {
						changedRegister = [...changedRegister, argument];
						step = Step.REGISTER_2;
					}
					if (mode === Mode.STANDARD) {
						changedRegister = [...changedRegister, argument];
						step = Step.ACC;
					}
					break;
				}
				if (step === Step.REGISTER_2) {
					changedRegister = [...changedRegister, register[argument]];
					step = Step.ACC;
					break;
				}
				if (step === Step.ACC) {
					if (mode === Mode.INDIRECT) {
						acc /= register[register[argument]];
					}
					if (mode === Mode.STANDARD) {
						acc /= register[argument];
					}
					if (mode === Mode.IMMEDIATE) {
						acc /= argument;
					}
					changedRegister = [...changedRegister, ACC];
					step = Step.PC;
					break;
				}
				if (step === Step.PC) {
					programCounter++;
					pcMark = true;
					step = Step.CLEAR;
					break;
				}
			}
			break;
		case Commands.JUMP:
			{
				if (step === Step.PROGRAM || step === Step.NEXT) {
					programIndex = programCounter;
					programMark = true;
					pcMark = false;
					step = Step.PC;
					break;
				}
				if (step === Step.PC) {
					programCounter = argument;
					pcMark = true;
					step = Step.CLEAR;
					break;
				}
			}
			break;
		case Commands.JZERO:
			{
				if (step === Step.PROGRAM || step === Step.NEXT) {
					programIndex = programCounter;
					programMark = true;
					pcMark = false;
					step = Step.ACC;
					break;
				}
				if (step === Step.ACC) {
					changedRegister = [...changedRegister, ACC];
					step = Step.PC;
					break;
				}
				if (step === Step.PC) {
					programCounter = acc === 0 ? argument : programCounter + 1;
					pcMark = true;
					step = Step.CLEAR;
					break;
				}
			}
			break;
		case Commands.JGTZ:
			{
				if (step === Step.PROGRAM || step === Step.NEXT) {
					programIndex = programCounter;
					programMark = true;
					pcMark = false;
					step = Step.ACC;
					break;
				}
				if (step === Step.ACC) {
					changedRegister = [...changedRegister, ACC];
					step = Step.PC;
					break;
				}
				if (step === Step.PC) {
					programCounter = acc > 0 ? argument : programCounter + 1;
					pcMark = true;
					step = Step.CLEAR;
					break;
				}
			}
			break;
		case Commands.HALT:
			{
				if (step === Step.PROGRAM || step === Step.NEXT) {
					programIndex = programCounter;
					programMark = true;
					pcMark = false;
					step = Step.HALT;
					break;
				}
				if (step === Step.HALT) {
					isHalt = true;
					step = Step.CLEAR;
					break;
				}
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
		programMark,
		inputMark,
		outputMark,
		pcMark,
		programIndex,
	};
}
