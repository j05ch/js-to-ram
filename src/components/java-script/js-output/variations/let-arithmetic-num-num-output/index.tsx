import * as React from 'react';

interface Props {
	isLet: boolean;
	varField: string;
	numLeft: string;
	operator: string;
	numRight: string;
	mark1: boolean;
	mark2: boolean;
	mark3: boolean;
}

const LetArithmeticNumNumOutput: React.FC<Props> = ({
	isLet,
	varField,
	numLeft,
	operator,
	numRight,
	mark1,
	mark2,
	mark3,
}) => {
	const styles1 = mark1 ? 'bg-pink-500 text-white font-bold' : '';
	const styles2 = mark2 ? 'bg-pink-500 text-white font-bold' : '';
	const styles3 = mark3 ? 'bg-pink-500 text-white font-bold' : '';

	return (
		<div className="flex gap-2 text-xl">
			<div className={`${styles3} flex gap-2`}>
				{isLet && <div>let</div>}
				<div>{varField}</div>
				<div>=</div>
			</div>
			<div className={styles1}>{numLeft}</div>
			<div className={styles2}>
				{operator} {numRight}
			</div>
			<div>;</div>
		</div>
	);
};

export default LetArithmeticNumNumOutput;
