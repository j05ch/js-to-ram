/**
 * @module src/utils/programUtils
 */

/**
 * Converts a program string into a two dimensional array
 * @param {string} s The program string
 * @return {string[][]} The resulting two dimensional array
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
