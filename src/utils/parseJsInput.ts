import { Components } from '../actions/components';
import { mapVariables } from './mapVariables';

const operators: any = {
	'+': 'ADD',
	'-': 'SUB',
	'*': 'MULT',
	'/': 'DIV',
};

export const parseJsInput = (input: any) => {
	const variables = mapVariables(input);
	const parsedArr: Array<any> = [];
	const keys = Object.keys(input);
	keys.forEach((k) => {
		const element = input[k];
		switch (element.type) {
			case Components.LET_ARITHMETIC_NUM_NUM: {
				const step1 = {
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
				};
				const step2 = {
					...step1,
					mark1: true,
					code1: `${operators['+']} =${element.operandLeft}`,
				};
				const step3 = {
					...step2,
					mark1: false,
					mark2: true,
					code2: `${operators[element.operator]} =${
						element.operandRight
					}`,
				};
				const step4 = {
					...step3,
					mark2: false,
					mark3: true,
					code3: `STORE ${variables.indexOf(element.varField)}`,
				};
				const step5 = {
					...step4,
					mark3: false,
					code4: 'LOAD =0',
					lastStep: true,
				};
				parsedArr.push(step1, step2, step3, step4, step5);
				break;
			}
			case Components.LET_ARITHMETIC_VAR_VAR: {
				const step1 = {
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
				};
				const step2 = {
					...step1,
					mark1: true,
					code1: `LOAD ${variables.indexOf(element.varLeft)}`,
				};
				const step3 = {
					...step2,
					mark1: false,
					mark2: true,
					code2: `${operators[element.operator]} ${variables.indexOf(
						element.varRight
					)}`,
				};
				const step4 = {
					...step3,
					mark2: false,
					mark3: true,
					code3: `STORE ${variables.indexOf(element.varField)}`,
				};
				const step5 = {
					...step4,
					mark3: false,
					code4: 'LOAD =0',
					lastStep: true,
				};
				parsedArr.push(step1, step2, step3, step4, step5);
				break;
			}
			case Components.LET_ARITHMETIC_VAR_NUM: {
				const step1 = {
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
				};
				const step2 = {
					...step1,
					mark1: true,
					code1: `LOAD ${variables.indexOf(element.varLeft)}`,
				};
				const step3 = {
					...step2,
					mark1: false,
					mark2: true,
					code2: `${operators[element.operator]} =${
						element.numRight
					}`,
				};
				const step4 = {
					...step3,
					mark2: false,
					mark3: true,
					code3: `STORE ${variables.indexOf(element.varField)}`,
				};
				const step5 = {
					...step4,
					mark3: false,
					code4: 'LOAD =0',
					lastStep: true,
				};
				parsedArr.push(step1, step2, step3, step4, step5);
				break;
			}
			case Components.LET: {
				const step1 = {
					type: Components.LET,
					varField: element.varField,
					value: element.value,
					mark1: false,
					mark2: false,
					code1: '',
					code2: '',
					code3: '',
					lastStep: false,
				};
				const step2 = {
					...step1,
					mark1: true,
					code1: `LOAD =${element.value}`,
				};
				const step3 = {
					...step2,
					mark1: false,
					mark2: true,
					code2: `STORE ${variables.indexOf(element.varField)}`,
				};
				const step4 = {
					...step3,
					mark3: false,
					code3: 'LOAD =0',
					lastStep: true,
				};
				parsedArr.push(step1, step2, step3, step4);
				break;
			}
			case Components.LET_VAR: {
				const step1 = {
					type: Components.LET_VAR,
					varField: element.varField,
					varValue: element.varValue,
					mark1: false,
					mark2: false,
					code1: '',
					code2: '',
					code3: '',
					lastStep: false,
				};
				const step2 = {
					...step1,
					mark1: true,
					code1: `LOAD ${variables.indexOf(element.varValue)}`,
				};
				const step3 = {
					...step2,
					mark1: false,
					mark2: true,
					code2: `STORE ${variables.indexOf(element.varField)}`,
				};
				const step4 = {
					...step3,
					mark3: false,
					code3: 'LOAD =0',
					lastStep: true,
				};
				parsedArr.push(step1, step2, step3, step4);
				break;
			}
			case Components.VAR_VAR: {
				const step1 = {
					type: Components.VAR_VAR,
					varField: element.varField,
					varValue: element.varValue,
					mark1: false,
					mark2: false,
					code1: '',
					code2: '',
					code3: '',
					lastStep: false,
				};
				const step2 = {
					...step1,
					mark1: true,
					code1: `LOAD ${variables.indexOf(element.varValue)}`,
				};
				const step3 = {
					...step2,
					mark1: false,
					mark2: true,
					code2: `STORE ${variables.indexOf(element.varField)}`,
				};
				const step4 = {
					...step3,
					mark3: false,
					code3: 'LOAD =0',
					lastStep: true,
				};
				parsedArr.push(step1, step2, step3, step4);
				break;
			}
			default:
				parsedArr.push({ hallo: 'hallo' });
		}
	});
	return parsedArr;
};
