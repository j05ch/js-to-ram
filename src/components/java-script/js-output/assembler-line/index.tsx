import * as React from 'react';

interface Props {
	code: string;
	lineNo: string;
}

const AssemblerLine: React.FC<Props> = ({ code, lineNo }) => {
	return (
		<div className="flex gap-0.5 text-lg">
			{/*<div>{lineNo}: </div>*/}
			<div>{code}</div>
		</div>
	);
};

export default AssemblerLine;
