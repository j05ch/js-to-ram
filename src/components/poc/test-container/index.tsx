import React, { useEffect, useState } from 'react';
import TestComponent from '../test-component';

// @ts-ignore
const TestContainer = ({ timeOut, c, v }) => {
	const [color, setColor] = useState('green');

	useEffect(() => {
		if (timeOut !== 9999) {
			const timer = setTimeout(() => {
				console.log('TimeOut', timeOut);
				setColor('black');
			}, timeOut * 5);
			return () => {
				clearTimeout(timer);
			};
		} else {
		}
	}, [timeOut]);

	return (
		<div>
			<TestComponent color={'blue'} value={'111'} priority={1} />
			<TestComponent color={color} value={'222'} priority={1} />
			<TestComponent color={'blue'} value={'333'} priority={1} />
		</div>
	);
};

export default TestContainer;
