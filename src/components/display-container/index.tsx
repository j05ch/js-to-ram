import * as React from 'react';
import Display from '../display';

interface Props {
	inputArray: string[];
	inputIndex: number | undefined;
	headerLabel: string;
}

const DisplayContainer: React.FC<Props> = ({
	inputArray,
	inputIndex,
	headerLabel,
}) => {
	return (
		<div className="flex justify-center items-center flex-col">
			<div className="text-white">{headerLabel}</div>
			<div>
				<Display inputArray={inputArray} inputIndex={inputIndex} />
			</div>
		</div>
	);
};

export default DisplayContainer;
