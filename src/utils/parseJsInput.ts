import { Components } from '../actions/components';
import { mapVariables } from './mapVariables';

const operators: any = {
	'+': 'ADD',
	'-': 'SUB',
	'*': 'MULT',
	'/': 'DIV',
};

export const parseJsInput = (input: any, lineNo: number, child = false) => {
	const variables = mapVariables(input);
	const parsedArr: Array<any> = [];
	const keys = Object.keys(input);
	keys.forEach((k) => {
		const element = input[k];
		switch (element.type) {
			case Components.LET_ARITHMETIC_NUM_NUM: {
				const step1 = {
					lineNo,
					type: Components.LET_ARITHMETIC_NUM_NUM,
					varField: element.varField,
					operandLeft: element.operandLeft,
					operator: element.operator,
					operandRight: element.operandRight,
					mark1: false,
					mark2: false,
					mark3: false,
					code1: '',
					code2: '',
					code3: '',
					code4: '',
					lastStep: false,
					insideBlock: false,
				};
				const step2 = {
					...step1,
					mark1: true,
					code1: `${lineNo++} ${operators['+']} =${
						element.operandLeft
					}`,
				};
				const step3 = {
					...step2,
					lineNo,
					mark1: false,
					mark2: true,
					code2: `${lineNo++} ${operators[element.operator]} =${
						element.operandRight
					}`,
				};
				const step4 = {
					...step3,
					lineNo,
					mark2: false,
					mark3: true,
					code3: `${lineNo++} STORE ${variables.indexOf(
						element.varField
					)}`,
				};
				const step5 = {
					...step4,
					lineNo,
					mark3: false,
					code4: `${lineNo++} LOAD =0`,
					lastStep: !child,
					insideBlock: child,
				};
				parsedArr.push(step1, step2, step3, step4, step5);
				break;
			}
			case Components.LET_ARITHMETIC_VAR_VAR: {
				const step1 = {
					lineNo,
					type: Components.LET_ARITHMETIC_VAR_VAR,
					varField: element.varField,
					varLeft: element.varLeft,
					operator: element.operator,
					varRight: element.varRight,
					mark1: false,
					mark2: false,
					mark3: false,
					code1: '',
					code2: '',
					code3: '',
					code4: '',
					lastStep: false,
					insideBlock: false,
				};
				const step2 = {
					...step1,
					mark1: true,
					code1: `${lineNo++} LOAD ${variables.indexOf(
						element.varLeft
					)}`,
				};
				const step3 = {
					...step2,
					lineNo,
					mark1: false,
					mark2: true,
					code2: `${lineNo++} ${
						operators[element.operator]
					} ${variables.indexOf(element.varRight)}`,
				};
				const step4 = {
					...step3,
					lineNo,
					mark2: false,
					mark3: true,
					code3: `${lineNo++} STORE ${variables.indexOf(
						element.varField
					)}`,
				};
				const step5 = {
					...step4,
					lineNo,
					mark3: false,
					code4: `${lineNo++} LOAD =0`,
					lastStep: !child,
					insideBlock: child,
				};
				parsedArr.push(step1, step2, step3, step4, step5);
				break;
			}
			case Components.LET_ARITHMETIC_VAR_NUM: {
				const step1 = {
					lineNo,
					type: Components.LET_ARITHMETIC_VAR_NUM,
					varField: element.varField,
					varLeft: element.varLeft,
					operator: element.operator,
					numRight: element.numRight,
					mark1: false,
					mark2: false,
					mark3: false,
					code1: '',
					code2: '',
					code3: '',
					code4: '',
					lastStep: false,
					insideBlock: false,
				};
				const step2 = {
					...step1,
					mark1: true,
					code1: `${lineNo++} LOAD ${variables.indexOf(
						element.varLeft
					)}`,
				};
				const step3 = {
					...step2,
					lineNo,
					mark1: false,
					mark2: true,
					code2: `${lineNo++} ${operators[element.operator]} =${
						element.numRight
					}`,
				};
				const step4 = {
					...step3,
					lineNo,
					mark2: false,
					mark3: true,
					code3: `${lineNo++} STORE ${variables.indexOf(
						element.varField
					)}`,
				};
				const step5 = {
					...step4,
					lineNo,
					mark3: false,
					code4: `${lineNo++} LOAD =0`,
					lastStep: !child,
					insideBlock: child,
				};
				parsedArr.push(step1, step2, step3, step4, step5);
				break;
			}
			case Components.LET_ARITHMETIC_NUM_VAR: {
				const step1 = {
					lineNo,
					type: Components.LET_ARITHMETIC_NUM_VAR,
					varField: element.varField,
					numLeft: element.numLeft,
					operator: element.operator,
					varRight: element.varRight,
					mark1: false,
					mark2: false,
					mark3: false,
					code1: '',
					code2: '',
					code3: '',
					code4: '',
					lastStep: false,
					insideBlock: false,
				};
				const step2 = {
					...step1,
					mark1: true,
					code1: `${lineNo++} LOAD =${element.numLeft}`,
				};
				const step3 = {
					...step2,
					lineNo,
					mark1: false,
					mark2: true,
					code2: `${lineNo++} ${
						operators[element.operator]
					} =${variables.indexOf(element.varRight)}`,
				};
				const step4 = {
					...step3,
					lineNo,
					mark2: false,
					mark3: true,
					code3: `${lineNo++} STORE ${variables.indexOf(
						element.varField
					)}`,
				};
				const step5 = {
					...step4,
					lineNo,
					mark3: false,
					code4: `${lineNo++} LOAD =0`,
					lastStep: !child,
					insideBlock: child,
				};
				parsedArr.push(step1, step2, step3, step4, step5);
				break;
			}
			case Components.ARITHMETIC_NUM_NUM: {
				const step1 = {
					lineNo,
					type: Components.ARITHMETIC_NUM_NUM,
					varField: element.varField,
					operandLeft: element.operandLeft,
					operator: element.operator,
					operandRight: element.operandRight,
					mark1: false,
					mark2: false,
					mark3: false,
					code1: '',
					code2: '',
					code3: '',
					code4: '',
					lastStep: false,
					insideBlock: false,
				};
				const step2 = {
					...step1,
					mark1: true,
					code1: `${lineNo++} ${operators['+']} =${
						element.operandLeft
					}`,
				};
				const step3 = {
					...step2,
					lineNo,
					mark1: false,
					mark2: true,
					code2: `${lineNo++} ${operators[element.operator]} =${
						element.operandRight
					}`,
				};
				const step4 = {
					...step3,
					lineNo,
					mark2: false,
					mark3: true,
					code3: `${lineNo++} STORE ${variables.indexOf(
						element.varField
					)}`,
				};
				const step5 = {
					...step4,
					lineNo,
					mark3: false,
					code4: `${lineNo++} LOAD =0`,
					lastStep: !child,
					insideBlock: child,
				};
				parsedArr.push(step1, step2, step3, step4, step5);
				break;
			}
			case Components.ARITHMETIC_VAR_VAR: {
				const step1 = {
					lineNo,
					type: Components.ARITHMETIC_VAR_VAR,
					varField: element.varField,
					varLeft: element.varLeft,
					operator: element.operator,
					varRight: element.varRight,
					mark1: false,
					mark2: false,
					mark3: false,
					code1: '',
					code2: '',
					code3: '',
					code4: '',
					lastStep: false,
					insideBlock: false,
				};
				const step2 = {
					...step1,
					mark1: true,
					code1: `${lineNo++} LOAD ${variables.indexOf(
						element.varLeft
					)}`,
				};
				const step3 = {
					...step2,
					lineNo,
					mark1: false,
					mark2: true,
					code2: `${lineNo++} ${
						operators[element.operator]
					} ${variables.indexOf(element.varRight)}`,
				};
				const step4 = {
					...step3,
					lineNo,
					mark2: false,
					mark3: true,
					code3: `${lineNo++} STORE ${variables.indexOf(
						element.varField
					)}`,
				};
				const step5 = {
					...step4,
					lineNo,
					mark3: false,
					code4: `${lineNo++} LOAD =0`,
					lastStep: !child,
					insideBlock: child,
				};
				parsedArr.push(step1, step2, step3, step4, step5);
				break;
			}
			case Components.ARITHMETIC_VAR_NUM: {
				const step1 = {
					lineNo,
					type: Components.ARITHMETIC_VAR_NUM,
					varField: element.varField,
					varLeft: element.varLeft,
					operator: element.operator,
					numRight: element.numRight,
					mark1: false,
					mark2: false,
					mark3: false,
					code1: '',
					code2: '',
					code3: '',
					code4: '',
					lastStep: false,
					insideBlock: false,
				};
				const step2 = {
					...step1,
					mark1: true,
					code1: `${lineNo++} LOAD ${variables.indexOf(
						element.varLeft
					)}`,
				};
				const step3 = {
					...step2,
					lineNo,
					mark1: false,
					mark2: true,
					code2: `${lineNo++} ${operators[element.operator]} =${
						element.numRight
					}`,
				};
				const step4 = {
					...step3,
					lineNo,
					mark2: false,
					mark3: true,
					code3: `${lineNo++} STORE ${variables.indexOf(
						element.varField
					)}`,
				};
				const step5 = {
					...step4,
					lineNo,
					mark3: false,
					code4: `${lineNo++} LOAD =0`,
					lastStep: !child,
					insideBlock: child,
				};
				parsedArr.push(step1, step2, step3, step4, step5);
				break;
			}
			case Components.ARITHMETIC_NUM_VAR: {
				const step1 = {
					lineNo,
					type: Components.ARITHMETIC_NUM_VAR,
					varField: element.varField,
					numLeft: element.numLeft,
					operator: element.operator,
					varRight: element.varRight,
					mark1: false,
					mark2: false,
					mark3: false,
					code1: '',
					code2: '',
					code3: '',
					code4: '',
					lastStep: false,
					insideBlock: false,
				};
				const step2 = {
					...step1,
					mark1: true,
					code1: `${lineNo++} LOAD =${element.numLeft}`,
				};
				const step3 = {
					...step2,
					lineNo,
					mark1: false,
					mark2: true,
					code2: `${lineNo++} ${
						operators[element.operator]
					} =${variables.indexOf(element.varRight)}`,
				};
				const step4 = {
					...step3,
					lineNo,
					mark2: false,
					mark3: true,
					code3: `${lineNo++} STORE ${variables.indexOf(
						element.varField
					)}`,
				};
				const step5 = {
					...step4,
					lineNo,
					mark3: false,
					code4: `${lineNo++} LOAD =0`,
					lastStep: !child,
					insideBlock: child,
				};
				parsedArr.push(step1, step2, step3, step4, step5);
				break;
			}
			case Components.LET: {
				const step1 = {
					lineNo,
					type: Components.LET,
					varField: element.varField,
					value: element.value,
					mark1: false,
					mark2: false,
					code1: '',
					code2: '',
					code3: '',
					lastStep: false,
					insideBlock: false,
				};
				const step2 = {
					...step1,
					lineNo,
					mark1: true,
					code1: `${lineNo++} LOAD =${element.value}`,
				};
				const step3 = {
					...step2,
					lineNo,
					mark1: false,
					mark2: true,
					code2: `${lineNo++} STORE ${variables.indexOf(
						element.varField
					)}`,
				};
				const step4 = {
					...step3,
					lineNo,
					mark3: false,
					code3: `${lineNo++} LOAD =0`,
					lastStep: !child,
					insideBlock: child,
				};
				parsedArr.push(step1, step2, step3, step4);
				break;
			}
			case Components.LET_VAR: {
				const step1 = {
					lineNo,
					type: Components.LET_VAR,
					varField: element.varField,
					varValue: element.varValue,
					mark1: false,
					mark2: false,
					code1: '',
					code2: '',
					code3: '',
					lastStep: false,
					insideBlock: false,
				};
				const step2 = {
					...step1,
					mark1: true,
					code1: `${lineNo++} LOAD ${variables.indexOf(
						element.varValue
					)}`,
				};
				const step3 = {
					...step2,
					lineNo,
					mark1: false,
					mark2: true,
					code2: `${lineNo++} STORE ${variables.indexOf(
						element.varField
					)}`,
				};
				const step4 = {
					...step3,
					lineNo,
					mark3: false,
					code3: `${lineNo++} LOAD =0`,
					lastStep: !child,
					insideBlock: child,
				};
				parsedArr.push(step1, step2, step3, step4);
				break;
			}
			case Components.VAR_VAR: {
				const step1 = {
					lineNo,
					type: Components.VAR_VAR,
					varField: element.varField,
					varValue: element.varValue,
					mark1: false,
					mark2: false,
					code1: '',
					code2: '',
					code3: '',
					lastStep: false,
					insideBlock: false,
				};
				const step2 = {
					...step1,
					mark1: true,
					code1: `${lineNo++} LOAD ${variables.indexOf(
						element.varValue
					)}`,
				};
				const step3 = {
					...step2,
					lineNo,
					mark1: false,
					mark2: true,
					code2: `${lineNo++} STORE ${variables.indexOf(
						element.varField
					)}`,
				};
				const step4 = {
					...step3,
					lineNo,
					mark3: false,
					code3: `${lineNo++} LOAD =0`,
					lastStep: !child,
					insideBlock: child,
				};
				parsedArr.push(step1, step2, step3, step4);
				break;
			}
			case Components.VAR_NUM: {
				const step1 = {
					lineNo,
					type: Components.VAR_NUM,
					varField: element.varField,
					value: element.value,
					mark1: false,
					mark2: false,
					code1: '',
					code2: '',
					code3: '',
					lastStep: false,
					insideBlock: false,
				};
				const step2 = {
					...step1,
					mark1: true,
					code1: `${lineNo++} LOAD =${element.value}`,
				};
				const step3 = {
					...step2,
					lineNo,
					mark1: false,
					mark2: true,
					code2: `${lineNo++} STORE ${variables.indexOf(
						element.varField
					)}`,
				};
				const step4 = {
					...step3,
					lineNo,
					mark3: false,
					code3: `${lineNo++} LOAD =0`,
					lastStep: !child,
					insideBlock: child,
				};
				parsedArr.push(step1, step2, step3, step4);
				break;
			}
			case Components.IF: {
				const step1 = {
					lineNo,
					type: Components.IF,
					varLeft: element.varLeft,
					varRight: element.varRight,
					operator: element.operator,
					mark1: false,
					mark2: false,
					code1: '',
					code2: '',
					code3: '',
					lastStep: false,
					insideBlock: false,
				};
				const step2 = {
					...step1,
					mark1: true,
					code1: `${lineNo++} LOAD ${variables.indexOf(
						element.varRight
					)}`,
				};
				const step3 = {
					...step2,
					lineNo,
					mark1: false,
					mark2: true,
					code2: `${lineNo++} SUB ${variables.indexOf(
						element.varLeft
					)}`,
				};
				const step4 = {
					...step3,
					lineNo,
					mark3: true,
					code3:
						element.operator === '>'
							? `${lineNo++} JGTZ LINE_NO`
							: `${lineNo++} JZERO LINE_NO`,
					insideBlock: true,
				};

				const children = parseJsInput(element.children, lineNo, true);
				lineNo = children.lineNo;

				const endIf = {
					...step4,
					lineNo,
					type: Components.END_IF,
					insideBlock: false,
					lastStep: true,
				};

				parsedArr.push(step1, step2, step3, step4);
				parsedArr.push(...children.parsedArr, endIf);
				break;
			}
			case Components.LOG: {
				const step1 = {
					lineNo,
					type: Components.LOG,
					varField: element.varField,
					mark1: false,
					code1: '',
					lastStep: false,
					insideBlock: false,
				};
				const step2 = {
					...step1,
					mark1: true,
					code1: `${lineNo++} WRITE ${variables.indexOf(
						element.varField
					)}`,
				};
				const step3 = {
					...step2,
					lineNo,
					mark1: false,
					code2: `${lineNo++} STORE ${variables.indexOf(
						element.varField
					)}`,
					lastStep: !child,
					insideBlock: child,
				};
				parsedArr.push(step1, step2, step3);
				break;
			}
			default:
				parsedArr.push({ hallo: 'hallo' });
		}
	});

	return { parsedArr, lineNo };
};
