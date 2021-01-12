import * as React from 'react';

interface Props {
	programLine: string[];
	programCounter: number;
}

const ProgramLine: React.FC<Props> = ({ programLine, programCounter }) => {
	return (
		<>
			<div className="dark:text-blue-50">
				<div>
					<span>{programLine[0]}:</span>
					<span>{programLine[1]}</span>
					<span>{programLine[2]}</span>
					{programCounter === Number(programLine[0]) && (
						<span>@</span>
					)}
				</div>
			</div>
		</>
	);
};

export default ProgramLine;
