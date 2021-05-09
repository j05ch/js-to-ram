import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

interface Props {
	index: number;
	removeVariation: (index: number) => void;
}

const VariationWrapper: React.FC<Props> = ({
	index,
	children,
	removeVariation,
}) => {
	return (
		<div className="flex items-center ml-2">
			<>{children}</>
			<div
				className="cursor-pointer ml-1 mr-1"
				onClick={() => removeVariation(index)}
			>
				<FontAwesomeIcon color={'red'} icon={faMinusCircle} />
			</div>
		</div>
	);
};

export default VariationWrapper;
