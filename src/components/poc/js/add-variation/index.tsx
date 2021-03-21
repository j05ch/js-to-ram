import * as React from 'react';

interface Props {
	index: number;
	handleClick: (index: number) => void;
}

const AddVariation: React.FC<Props> = ({ index, handleClick }) => {
	return (
		<div className="flex items-center">
			<div className="text-red-600">{index}</div>
			<div onClick={() => handleClick(index)}>+</div>
		</div>
	);
};

export default AddVariation;
