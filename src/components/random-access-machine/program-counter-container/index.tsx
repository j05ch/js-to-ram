import * as React from 'react';
import { labels } from '../../../models/labels';
import { useEffect, useState } from 'react';

interface Props {
	programCounter: number | undefined;
	mark: boolean;
}

const ProgramCounterContainer: React.FC<Props> = ({ programCounter, mark }) => {
	const [locale, setLocale] = useState('DE');

	useEffect(() => setLocale('DE'), []);

	const colorMark = mark
		? 'bg-pink-500 text-white font-bold'
		: 'text-blue-800';

	return (
		<div className="flex flex-col items-center p-2">
			<div className="text-gray-800 text-blue-800 font-bold">
				{labels[locale].PROGRAM_COUNTER_HEADER}
			</div>
			<div className={`${colorMark} p-2`}>
				{programCounter !== undefined ? programCounter : '-'}
			</div>
		</div>
	);
};

export default ProgramCounterContainer;
