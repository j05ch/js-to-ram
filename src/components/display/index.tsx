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
				<div key={String(index)} className="dark:text-green-400 pr-1.5">
					{s}
				</div>
			) : (
				<div className="dark:text-white pr-1.5">{s}</div>
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
