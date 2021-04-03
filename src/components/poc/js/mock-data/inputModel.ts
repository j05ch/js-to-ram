export const inputModelMock = {
	1: {
		type: 'let a = 123 + 456',
		varField: 'a',
		operandLeft: '111',
		operandRight: '222',
		operator: '+',
	},
	3: {
		type: 'let a = 123 + 456',
		varField: 'b',
		operandLeft: '3',
		operandRight: '4',
		operator: '*',
	},
	5: {
		type: 'if',
		varLeft: 'a',
		operator: '==',
		varRight: 'b',
		children: {
			1: {
				type: 'let a = 123 + 456',
				varField: 'r',
				operandLeft: '123',
				operator: '+',
				operandRight: '444',
			},
			3: {
				type: 'let a = 123 + 456',
				varField: 'z',
				operandLeft: '444',
				operator: '/',
				operandRight: '666',
			},
		},
	},
};
