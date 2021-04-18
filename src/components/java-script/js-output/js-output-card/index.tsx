import * as React from 'react';

interface Props {}

const JsOutputCard: React.FC<Props> = ({ children }) => {
	return (
		<div className="flex flex-col w-3/12 p-2 bg-blue-200 rounded">
			{children}
		</div>
	);
};

export default JsOutputCard;
