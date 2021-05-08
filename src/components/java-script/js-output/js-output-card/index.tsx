import * as React from 'react';

const JsOutputCard: React.FC = ({ children }) => {
	return (
		<div className="flex flex-col p-4 bg-blue-200 rounded">{children}</div>
	);
};

export default JsOutputCard;
