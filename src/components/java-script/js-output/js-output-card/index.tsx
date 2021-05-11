import * as React from 'react';

/**
 * Card-component for JS and assembly code.
 * @param children
 * @constructor
 */
const JsOutputCard: React.FC = ({ children }) => {
	return (
		<div className="flex flex-col p-4 bg-blue-200 rounded">{children}</div>
	);
};

export default JsOutputCard;
