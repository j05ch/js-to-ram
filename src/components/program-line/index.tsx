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
					<div>{programLine[0]}:</div>
					<div>{programLine[1]}</div>
					<div>{programLine[2]}</div>
				</div>
				{programCounter === Number(programLine[0]) && <div>@</div>}
			</div>
		</>
	);
};

export default ProgramLine;
