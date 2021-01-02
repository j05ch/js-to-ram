import * as React from 'react';
import { labels } from '../../models/labels';
import ProgramLine from '../program-line';

interface Props {
	programArray: string[][];
	programCounter: number;
}

const ProgramContainer: React.FC<Props> = ({
	programArray,
	programCounter,
}) => {
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
				<h1>{labels.DE.PROGRAM_HEADER}</h1>
				<div className="dark:text-blue-50">{getProgramLines()}</div>
			</div>
		</>
	);
};

export default ProgramContainer;
