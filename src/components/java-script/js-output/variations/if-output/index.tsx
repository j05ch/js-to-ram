import * as React from 'react';

interface Props {
	varLeft: string;
	varRight: string;
	operator: string;
	mark1: boolean;
	mark2: boolean;
	mark3: boolean;
}

const IfOutput: React.FC<Props> = ({
	varLeft,
	varRight,
	operator,
	mark1,
	mark2,
	mark3,
}) => {
	const styles1 = mark1 ? 'text-red-500' : '';
	const styles2 = mark2 ? 'text-red-500' : '';
	const styles3 = mark3 ? 'text-red-500' : '';

	return (
		<div className="flex gap-1">
			<div>if (</div>
			<div className={`${styles1} ${styles3}`}>{varLeft}</div>
			<div className={`${styles2} ${styles3}`}>{operator}</div>
			<div className={`${styles2} ${styles3}`}>{varRight}</div>
			<div>{') {'}</div>
		</div>
	);
};

export default IfOutput;
