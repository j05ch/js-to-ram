import * as React from 'react';

interface Props {
	varField: string;
	mark1: boolean;
}

/**
 * Displays console.log-output
 * @param varField
 * @param mark1
 * @returns {JSX.Element}
 */
const ConsoleLogOutput: React.FC<Props> = ({ varField, mark1 }) => {
	const styles1 = mark1 ? 'bg-pink-500 text-white font-bold' : '';

	return (
		<div className="flex gap-2 mb-1 text-xl">
			<div className={styles1}>console.log( {varField} )</div>
			<div>;</div>
		</div>
	);
};

export default ConsoleLogOutput;
