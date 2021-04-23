import * as React from 'react';

interface Props {
	varField: string;
	value: string;
	mark1: boolean;
	mark2: boolean;
}

const LetOutput: React.FC<Props> = ({ varField, value, mark1, mark2 }) => {
	const styles1 = mark1 ? 'bg-pink-500 text-white font-bold' : '';
	const styles2 = mark2 ? 'bg-pink-500 text-white font-bold' : '';

	return (
		<div className="flex gap-2 mb-1 text-xl">
			<div className={styles2}>let {varField} =</div>
			<div className={styles1}>{value}</div>
			<div>;</div>
		</div>
	);
};

export default LetOutput;
