import * as React from 'react';

interface Props {
	varField: string;
	numLeft: string;
	operator: string;
	numRight: string;
}

const LetArithmeticNumNumOutput: React.FC<Props> = ({
	varField,
	numLeft,
	operator,
	numRight,
}) => {
	return (
		<div className="flex">
			<div>let</div>
			<div>{varField}</div>
			<div>=</div>
			<div>{numLeft}</div>
			<div>{operator}</div>
			<div>{numRight}</div>
			<div>;</div>
		</div>
	);
};

export default LetArithmeticNumNumOutput;
