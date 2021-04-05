import * as React from 'react';
import Display from '../display';

interface Props {
	inputArray: string[];
	inputIndex: number | undefined;
	headerLabel: string;
	mark: boolean;
}

const DisplayContainer: React.FC<Props> = ({
	inputArray,
	inputIndex,
	headerLabel,
	mark,
}) => {
	return (
		<div className="flex justify-center items-center flex-col">
			<div className="text-white">{headerLabel}</div>
			<div>
				<Display
					inputArray={inputArray}
					inputIndex={inputIndex}
					mark={mark}
				/>
			</div>
		</div>
	);
};

export default DisplayContainer;
