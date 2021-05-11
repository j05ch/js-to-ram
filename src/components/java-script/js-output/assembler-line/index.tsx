import * as React from 'react';

interface Props {
	code: string;
	lineNo: string;
}

/**
 * Displays a line of assembly code.
 * @param code
 * @param lineNo
 * @returns {JSX.Element}
 */
const AssemblerLine: React.FC<Props> = ({ code, lineNo }) => {
	return (
		<div className="flex gap-0.5 text-lg">
			<div>{code}</div>
		</div>
	);
};

export default AssemblerLine;
