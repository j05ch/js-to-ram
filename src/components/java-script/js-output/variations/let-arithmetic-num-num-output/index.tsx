import * as React from 'react';

interface Props {
	varField: string;
	numLeft: string;
	operator: string;
	numRight: string;
	mark1: boolean;
	mark2: boolean;
	mark3: boolean;
}

const LetArithmeticNumNumOutput: React.FC<Props> = ({
	varField,
	numLeft,
	operator,
	numRight,
	mark1,
	mark2,
	mark3,
}) => {
	const styles1 = mark1 ? 'text-red-500' : '';
	const styles2 = mark2 ? 'text-red-500' : '';
	const styles3 = mark3 ? 'text-red-500' : '';

	return (
		<div className="flex">
			<div className={styles3}>let</div>
			<div className={styles3}>{varField}</div>
			<div className={styles3}>=</div>
			<div className={styles1}>{numLeft}</div>
			<div className={styles2}>{operator}</div>
			<div className={styles2}>{numRight}</div>
			<div>;</div>
		</div>
	);
};

export default LetArithmeticNumNumOutput;
