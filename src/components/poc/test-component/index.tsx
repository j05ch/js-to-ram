import React, { useState } from 'react';

// @ts-ignore
const TestComponent = ({ color, value, priority }) => {
	const [show, setShow] = useState(false);

	setTimeout(() => {
		setShow(true);
	}, priority * 1000);

	return (
		<div>
			{show && <div style={{ backgroundColor: color }}>{value}</div>}
		</div>
	);
};

export default TestComponent;
