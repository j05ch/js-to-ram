import * as React from 'react';

interface Props {
	varField: string;
	mark1: boolean;
}

const ConsoleLogOutput: React.FC<Props> = ({ varField, mark1 }) => {
	const styles1 = mark1 ? 'text-red-500' : '';

	return (
		<div className="flex">
			<div className={styles1}>console.log(</div>
			<div className={styles1}>{varField}</div>
			<div className={styles1}>)</div>
			<div>;</div>
		</div>
	);
};

export default ConsoleLogOutput;
