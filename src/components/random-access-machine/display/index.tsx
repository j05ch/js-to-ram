import * as React from 'react';

interface Props {
	inputArray: string[];
	inputIndex: number | undefined;
	mark: boolean;
}

const Display: React.FC<Props> = ({ inputArray, inputIndex, mark }) => {
	function getDisplay() {
		return inputArray.map((s, index) => {
			return mark && index === inputIndex ? (
				<div
					key={`${String(index)}-Display`}
					className="bg-pink-500 text-white font-bold p-1.5"
				>
					{s}
				</div>
			) : (
				<div className="text-white p-1.5">{s}</div>
			);
		});
	}

	return (
		<>
			<div className="flex justify-center items-center">
				{getDisplay()}
			</div>
		</>
	);
};

export default Display;
