import * as React from 'react';

interface Props {
	index: number;
	removeVariation: (index: number) => void;
}

const Variation: React.FC<Props> = ({ index, children, removeVariation }) => {
	return (
		<div>
			<>{children}</>
			<div onClick={() => removeVariation(index)}>-</div>
		</div>
	);
};

export default Variation;
