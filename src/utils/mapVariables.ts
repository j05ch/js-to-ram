const HIGHEST_USED_REGISTER = 0;

export const mapVariables = (object: any) => {
	const mappedVariables: any = [HIGHEST_USED_REGISTER];
	Object.keys(object).forEach((k) => {
		if (object[k].varField) {
			const varField = object[k].varField;
			if (!mappedVariables.includes(varField)) {
				mappedVariables.push(varField);
			}
		}
		if (object[k].children) {
			const childrenObject = object[k].children;
			Object.keys(childrenObject).forEach((k) => {
				if (childrenObject[k].varField) {
					const varField = childrenObject[k].varField;
					if (!mappedVariables.includes(varField)) {
						mappedVariables.push(varField);
					}
				}
			});
		}
	});
	mappedVariables[HIGHEST_USED_REGISTER] = mappedVariables.length - 1;
	console.log('mapped variable', mappedVariables);
	return mappedVariables;
};
