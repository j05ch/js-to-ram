import * as React from 'react';
import { labels } from '../../models/labels';
import { useEffect, useState } from 'react';

interface Props {
	programCounter: number;
}

const ProgramCounterContainer: React.FC<Props> = ({ programCounter }) => {
	const [locale, setLocale] = useState('DE');

	useEffect(() => setLocale('DE'), []);

	return (
		<>
			<div>
				<div className="dark:text-blue-50">
					{labels[locale].PROGRAM_COUNTER_HEADER}
				</div>
				<div>{programCounter}</div>
			</div>
		</>
	);
};

export default ProgramCounterContainer;
