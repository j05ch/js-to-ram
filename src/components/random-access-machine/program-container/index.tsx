import * as React from 'react';
import { labels } from '../../../models/labels';
import ProgramLine from '../program-line';
import { useEffect, useState } from 'react';
import useLanguage from '../../../hooks/useLanguageContext';

interface Props {
	programArray: string[][];
	programCounter: number | undefined;
	mark: boolean;
}

/**
 * Container for program-lines.
 * @param programArray
 * @param programCounter
 * @param mark
 * @constructor
 */
const ProgramContainer: React.FC<Props> = ({
	programArray,
	programCounter,
	mark,
}) => {
	const locale = useLanguage().language;

	function getProgramLines() {
		return programArray.map((l) => (
			<ProgramLine
				programLine={l}
				programCounter={programCounter}
				key={l[0]}
				mark={mark}
			/>
		));
	}

	return (
		<div className="p-1">
			<h1 className="text-blue-800 font-bold">
				{labels[locale].PROGRAM_HEADER}
			</h1>
			{programArray && programArray.length > 1 && (
				<div className="text-blue-800">{getProgramLines()}</div>
			)}
		</div>
	);
};

export default ProgramContainer;
