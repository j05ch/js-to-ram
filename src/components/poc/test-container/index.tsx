import React, { useEffect, useState } from 'react';
import TestComponent from '../test-component';

// @ts-ignore
const TestContainer = ({ timeOut, c, v }) => {
	// const [color, setColor] = useState('green');
	// const [value, setValue] = useState('Bonkour');

	// useEffect(() => {
	// 	if (timeOut !== 9999) {
	// 		const timer = setTimeout(() => {
	// 			console.log('C', c);
	// 			console.log('TimeOut', timeOut);
	// 			console.log('V', v);
	// 			setColor(c);
	// 			setValue(v);
	// 		}, timeOut);
	// 		return () => {
	// 			clearTimeout(timer);
	// 		}
	// 	};
	// }, [timeOut, c, v]);

	return (
		<div>
			<TestComponent color={c} value={v} priority={1} />
		</div>
	);
};

export default TestContainer;
