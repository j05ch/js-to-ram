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
			case Components.LET_ARITHMETIC_NUM_NUM:
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
				};
				parsedArr.push(step1, step2, step3, step4, step5);
				break;
			default:
				parsedArr.push({ hallo: 'hallo' });
		}
	});
	return parsedArr;
};
