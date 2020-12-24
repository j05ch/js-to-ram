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
