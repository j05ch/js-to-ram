import * as React from 'react';
import { labels } from '../../models/labels';
import ProgramLine from '../program-line';
import { useEffect, useState } from 'react';

interface Props {
	programArray: string[][];
	programCounter: number;
}

const ProgramContainer: React.FC<Props> = ({
	programArray,
	programCounter,
}) => {
	const [locale, setLocale] = useState('DE');

	useEffect(() => setLocale('DE'), []);

	function getProgramLines() {
		return programArray.map((l) => (
			<ProgramLine
				programLine={l}
				programCounter={programCounter}
				key={l[0]}
			/>
		));
	}

	return (
		<>
			<div>
				<h1>{labels[locale].PROGRAM_HEADER}</h1>
				<div className="dark:text-blue-50">{getProgramLines()}</div>
			</div>
		</>
	);
};

export default ProgramContainer;
