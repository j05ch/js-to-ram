import * as React from 'react';

interface Props {
	mark1: boolean;
}

const ElseOutput: React.FC<Props> = ({ mark1 }) => {
	const styles1 = mark1 ? 'bg-pink-500 text-white font-bold' : '';

	return (
		<div className="flex gap-2 mb-1 text-xl">
			<div className={styles1}>{'else {'}</div>
		</div>
	);
};

export default ElseOutput;
