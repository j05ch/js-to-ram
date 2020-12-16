import React, { useEffect, useState } from 'react';

// @ts-ignore
const TestComponent = ({ color, value, priority }) => {
	const [show, setShow] = useState(true);

	return (
		<div>
			{show && <div style={{ backgroundColor: color }}>{value}</div>}
		</div>
	);
};

export default TestComponent;
