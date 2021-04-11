export const Components = {
	NONE: '',
	ADD_VARIATION: '+',
	LET_ARITHMETIC_VAR_VAR: 'let a = b + c',
	LET_ARITHMETIC_NUM_NUM: 'let a = 123 + 456',
	LET_ARITHMETIC_VAR_NUM: 'let a = b + 456',
	LET_ARITHMETIC_NUM_VAR: 'let a = 456 + b',
	ARITHMETIC_VAR_VAR: 'a = b + c',
	ARITHMETIC_NUM_NUM: 'a = 123 + 456',
	ARITHMETIC_VAR_NUM: 'a = b + 456',
	ARITHMETIC_NUM_VAR: 'a = 456 + b',
	LET: 'let a = 5',
	VAR_NUM: 'a = 42',
	LET_VAR: 'let a = b',
	VAR_VAR: 'a = b',
	VARIATIONS_SELECTOR: 'Select',
	IF: 'if',
	END_IF: 'end if',
	FOR: 'for',
} as const;

export type ComponentsKey = typeof Components[keyof typeof Components];
