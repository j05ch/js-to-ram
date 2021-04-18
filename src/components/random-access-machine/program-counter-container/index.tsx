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

	const colorMark = mark ? 'bg-red-700' : 'text-blue-50';

	return (
		<>
			<div className={colorMark}>
				<div className="text-blue-50">
					{labels[locale].PROGRAM_COUNTER_HEADER}
				</div>
				<div className="text-blue-50">
					{programCounter !== undefined ? programCounter : '-'}
				</div>
			</div>
		</>
	);
};

export default ProgramCounterContainer;
