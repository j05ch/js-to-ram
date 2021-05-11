import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

interface Props {
	index: number;
	handleClick: (index: number) => void;
}

/**
 * Component for adding a variation.
 * @param index
 * @param handleClick
 * @returns {JSX.Element}
 */
const AddVariation: React.FC<Props> = ({ index, handleClick }) => {
	return (
		<div className="flex items-center">
			<div
				className="cursor-pointer ml-2"
				onClick={() => handleClick(index)}
			>
				<FontAwesomeIcon color={'blue'} icon={faPlusCircle} />
			</div>
		</div>
	);
};

export default AddVariation;
