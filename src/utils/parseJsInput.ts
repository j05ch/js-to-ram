export const parseJsInput = (input: any) => {
	const keys = Object.keys(input);
	return keys.map((k) => input[k]);
};
