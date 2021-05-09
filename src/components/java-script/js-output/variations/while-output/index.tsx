import * as React from 'react';

interface Props {
	varLeft: string;
	varRight: string;
	operator: string;
	mark1: boolean;
	mark2: boolean;
	mark3: boolean;
}

const WhileOutput: React.FC<Props> = ({
	varLeft,
	varRight,
	operator,
	mark1,
	mark2,
	mark3,
}) => {
	const styles1 = mark1 ? 'bg-pink-500 text-white font-bold' : '';
	const styles2 = mark2 ? 'bg-pink-500 text-white font-bold' : '';
	const styles3 = mark3 ? 'bg-pink-500 text-white font-bold' : '';

	return (
		<div className="flex gap-2 mb-1 text-xl">
			<div>while (</div>
			<div className={`${styles1} ${styles3}`}>{varLeft}</div>
			<div className={`${styles2} ${styles3}`}>
				{operator} {varRight}
			</div>
			<div>{') {'}</div>
		</div>
	);
};

export default WhileOutput;
