export const Components = {
	NONE: '',
	ADD_VARIATION: '+',
	LET_ARITHMETIC_VAR_VAR: 'let a = b + c',
	LET_ARITHMETIC_NUM_NUM: 'let a = 123 + 456',
	VARIATIONS_SELECTOR: 'Select',
} as const;

export type ComponentsKey = typeof Components[keyof typeof Components];
