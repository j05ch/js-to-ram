export const Components = {
	NONE: '',
	ADD_VARIATION: '+',
	LET_ARITHMETIC_VAR_VAR: 'let a = b + c',
	VARIATIONS_SELECTOR: '',
} as const;

export type ComponentsKey = typeof Components[keyof typeof Components];
