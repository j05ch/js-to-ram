export const Components = {
	NONE: '',
	ADD_VARIATION: '+',
	LET_ARITHMETIC_VAR_VAR: 'let a = b + c',
	LET_ARITHMETIC_NUM_NUM: 'let a = 123 + 456',
	LET: 'let a = 5',
	VARIATIONS_SELECTOR: 'Select',
	IF: 'if',
	FOR: 'for',
} as const;

export type ComponentsKey = typeof Components[keyof typeof Components];
