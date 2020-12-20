import * as React from 'react';
import { useState } from 'react';
import { useInterval } from '../../../hooks/useInterval';

const Counter: React.FC = () => {
	const [counter, setCounter] = useState(0);
	const [delay, setDelay] = useState(300);
	const [isRunning, setIsRunning] = useState(true);

	useInterval(() => setCounter(counter + 1), isRunning ? delay : null);

	function handleDelayChange(e: React.ChangeEvent<HTMLInputElement>) {
		setDelay(Number(e.target.value));
	}

	function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		setIsRunning(!isRunning);
	}

	return (
		<div className="flex items-center justify-center flex-col h-screen">
			<h1 className="p-1 m-1 text-3xl">{counter}</h1>
			<input
				className="text-center p-1 m-1 border-2"
				value={delay}
				onChange={handleDelayChange}
			/>
			<button
				className="bg-blue-50 p-1 m-1 rounded border-2"
				onClick={handleClick}
			>
				Pause / Resume
			</button>
		</div>
	);
};

export default Counter;
