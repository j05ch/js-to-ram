import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

interface Props {
	programLine: string[];
	programCounter: number | undefined;
	mark: boolean;
}

const ProgramLine: React.FC<Props> = ({
	programLine,
	programCounter,
	mark,
}) => {
	const lineNo = Number(programLine[0]);
	const isCurrentLine =
		programCounter !== undefined && programCounter === lineNo;
	const colorMark =
		mark && isCurrentLine
			? 'border-pink-500 bg-pink-500 text-white font-bold'
			: 'border-gray-300 text-blue-800';

	return (
		<div className={`border-2 ${colorMark}`}>
			<div className="flex items-center gap-1">
				<span>{programLine[0]}:</span>
				<span>{programLine[1]}</span>
				<span>{programLine[2]}</span>
				{isCurrentLine && <FontAwesomeIcon icon={faArrowCircleLeft} />}
			</div>
		</div>
	);
};

export default ProgramLine;
