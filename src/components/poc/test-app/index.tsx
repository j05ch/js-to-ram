import React, { useEffect, useState } from 'react';
import TestContainer from '../test-container';

const TestApp = () => {
	const [timeOut, setTimeOut] = useState(9999);
	const [color, setColor] = useState('red');
	const [value, setValue] = useState('Hallo');
	// const [arr, setArr] = useState([
	// 	{
	// 		section: 1,
	// 		color: 'red',
	// 		priority: 0,
	// 		value: 'Hallo ich bin 1',
	// 	},
	// 	{
	// 		section: 2,
	// 		color: 'blue',
	// 		priority: 0,
	// 		value: 'Hallo ich bin 2',
	// 	},
	// ]);

	const arr = [
		{
			color: 'red',
			value: '1',
			timeOut: 1,
		},
		{
			color: 'green',
			value: '2',
			timeOut: 4,
		},
		{
			color: 'yellow',
			value: '3',
			timeOut: 2,
		},
		{
			color: 'blue',
			value: '4',
			timeOut: 3,
		},
	];

	useEffect(() => {
		// arr.map((o, index) => {
		setTimeout(() => {
			setTimeOut(1000);
			setValue('hallo');
			setColor('blue');
		}, 5000);
		// return () => clearTimeout(timer);
		// });
	}, []);

	return (
		<div>
			<TestContainer timeOut={timeOut} c={color} v={value} />
		</div>
	);
};

export default TestApp;
