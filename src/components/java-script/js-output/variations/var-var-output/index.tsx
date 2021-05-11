import * as React from 'react';

interface Props {
	varField: string;
	varValue: string;
	mark1: boolean;
	mark2: boolean;
}

/**
 * Displays var-var-output
 * @param varField
 * @param varValue
 * @param mark1
 * @param mark2
 * @returns {JSX.Element}
 */
const VarVarOutput: React.FC<Props> = ({
	varField,
	varValue,
	mark1,
	mark2,
}) => {
	const styles1 = mark1 ? 'bg-pink-500 text-white font-bold' : '';
	const styles2 = mark2 ? 'bg-pink-500 text-white font-bold' : '';

	return (
		<div className="flex gap-2 mb-1 text-xl">
			<div className={styles2}>{varField} =</div>
			<div className={styles1}>{varValue}</div>
			<div>;</div>
		</div>
	);
};

export default VarVarOutput;
