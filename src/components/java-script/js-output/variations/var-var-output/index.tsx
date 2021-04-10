import * as React from 'react';

interface Props {
	varField: string;
	varValue: string;
	mark1: boolean;
	mark2: boolean;
}

const VarVarOutput: React.FC<Props> = ({
	varField,
	varValue,
	mark1,
	mark2,
}) => {
	const styles1 = mark1 ? 'text-red-500' : '';
	const styles2 = mark2 ? 'text-red-500' : '';

	return (
		<div className="flex">
			<div className={styles2}>{varField}</div>
			<div className={styles2}>=</div>
			<div className={styles1}>{varValue}</div>
			<div>;</div>
		</div>
	);
};

export default VarVarOutput;
