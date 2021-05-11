import * as React from 'react';
import { labels } from '../../../models/labels';
import useLanguage from '../../../hooks/useLanguageContext';

interface Props {
	programCounter: number | undefined;
	mark: boolean;
}

/**
 * PC-Component.
 * @param programCounter
 * @param mark
 * @returns returns {JSX.Element}
 */
const ProgramCounterContainer: React.FC<Props> = ({ programCounter, mark }) => {
	const locale = useLanguage().language;

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
