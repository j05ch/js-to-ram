import * as React from 'react';

interface Props {}

const JSParser: React.FC<Props> = () => {
	const string = 'let a = 1 + 2;';
	const arr = string.split(' ');

	return (
		<>
			{arr.map((s) => (
				<div>{s}</div>
			))}
		</>
	);
};

export default JSParser;
