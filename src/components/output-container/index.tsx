import * as React from 'react';
import Display from '../display';
import { useEffect, useState } from 'react';
import { labels } from '../../models/labels';

interface Props {
	inputArray: string[];
	inputIndex: number;
}

const OutputContainer: React.FC<Props> = ({ inputArray, inputIndex }) => {
	const [locale, setLocale] = useState('DE');

	useEffect(() => setLocale('DE'), []);

	return (
		<div className="flex justify-center items-center flex-col">
			<div className="text-white">
				{labels[locale].OUTPUT_CONTAINER_HEADER}
			</div>
			<div>
				<Display inputArray={inputArray} inputIndex={inputIndex} />
			</div>
		</div>
	);
};

export default OutputContainer;
