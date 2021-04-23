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
		<div className="flex items-center flex-col justify-items-start p-2 h-20">
			<div className="text-white font-bold">{headerLabel}</div>
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
