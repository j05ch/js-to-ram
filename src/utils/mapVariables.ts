const HIGHEST_USED_REGISTER = 0;

export const mapVariables = (object: any) => {
	const mappedVariables: any = {};
	let keyCounter = 1;
	const keys = Object.keys(object);
	keys.forEach((k) => {
		if (object[k].varField) {
			const varField = object[k].varField;
			if (!getKeyByValue(mappedVariables, varField)) {
				mappedVariables[keyCounter] = varField;
				keyCounter++;
			}
		}
		if (object[k].children) {
			const childrenObject = object[k].children;
			const childrenKeys = Object.keys(childrenObject);
			childrenKeys.forEach((k) => {
				if (childrenObject[k].varField) {
					const varField = childrenObject[k].varField;
					if (!getKeyByValue(mappedVariables, varField)) {
						mappedVariables[keyCounter] = varField;
						keyCounter++;
					}
				}
			});
		}
	});
	mappedVariables[HIGHEST_USED_REGISTER] = keyCounter - 1;
	return mappedVariables;
};

function getKeyByValue(object: any, value: string) {
	return Object.keys(object).find((key) => object[key] === value);
}
