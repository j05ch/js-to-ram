import * as React from 'react';

interface Props {
	index: number;
	handleClick: (index: number) => void;
}

const AddVariation: React.FC<Props> = ({ index, handleClick }) => {
	return (
		<>
			<p>{index}</p>
			<div onClick={() => handleClick(index)}>+</div>
		</>
	);
};

export default AddVariation;
