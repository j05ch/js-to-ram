/**
 * Converts a program string into a two dimensional array
 * @param s The program string
 * @return The resulting two dimensional array
 */
export function programStringToArray(s: string) {
	return s.split('\n').map((l) => l.split(' '));
}

/**
 * Saves s as text file.
 * @param s
 */
export function downloadProgramFile(s: string) {
	const tempElement = document.createElement('a');
	const file = new Blob([s], { type: 'text/plain' });
	tempElement.href = URL.createObjectURL(file);
	tempElement.download = 'program.txt';
	document.body.appendChild(tempElement);
	tempElement.click();
}

/**
 * Saves data as JSON file.
 * @param data
 */
export function downloadProgramJson(data: any) {
	const tempElement = document.createElement('a');
	const file = new Blob(
		[decodeURIComponent(encodeURI(JSON.stringify(data, null, 2)))],
		{ type: 'application/json;charset=utf-8;' }
	);
	tempElement.href = URL.createObjectURL(file);
	tempElement.download = 'js-program.json';
	document.body.appendChild(tempElement);
	tempElement.click();
}
