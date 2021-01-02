import * as React from 'react';
import { useState } from 'react';
import { useInterval } from '../../../hooks/useInterval';
import ProgramInput from '../../program-input';

const Counter: React.FC = () => {
	const [counter, setCounter] = useState(0);
	const [content, setContent] = useState('');
	const [delay, setDelay] = useState(300);
	const [isRunning, setIsRunning] = useState(true);
	const [color1, setColor1] = useState('');
	const [color2, setColor2] = useState('');
	const [color3, setColor3] = useState('');
	const [programString, setProgramString] = useState('');

	const contents = ['Hippie', 'Buch', 'Polizei'];

	const states = [
		{
			color1: 'bg-blue-500',
			color2: 'bg-red-500',
			color3: 'bg-green-500',
		},
		{
			color1: 'bg-red-500',
			color2: 'bg-blue-500',
			color3: 'bg-green-500',
		},
		{
			color1: 'bg-blue-500',
			color2: 'bg-green-500',
			color3: 'bg-red-500',
		},
		{
			color1: 'bg-green-500',
			color2: 'bg-blue-500',
			color3: 'bg-red-500',
		},
	];

	useInterval(
		() => {
			setContent(contents[counter % 3]);
			setColor1(states[counter % 4].color1);
			setColor2(states[counter % 4].color2);
			setColor3(states[counter % 4].color3);
			setCounter(counter + 1);
		},
		isRunning ? delay : null
	);

	function handleDelayChange(e: React.ChangeEvent<HTMLInputElement>) {
		setDelay(Number(e.target.value));
	}

	function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		setIsRunning(!isRunning);
	}

	function handleStepClick(
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) {
		setIsRunning(false);
		setCounter(counter + 1);
		setContent(contents[counter % 3]);
		setColor1(states[counter % 4].color1);
		setColor2(states[counter % 4].color2);
		setColor3(states[counter % 4].color3);
	}

	return (
		<div className="flex items-center justify-center flex-col h-screen">
			<ProgramInput setState={setProgramString} value={programString} />
			<h1 className="p-1 m-1 text-3xl">{content}</h1>
			<h1 className="p-1 m-1 text-3xl">{counter}</h1>
			<p>Delay:</p>
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
			<button
				className="bg-blue-50 p-1 m-1 rounded border-2"
				onClick={handleStepClick}
			>
				Step
			</button>
			<div className={`${color1} m-1`}>--- 1 ---</div>
			<div className={`${color2} m-1`}>--- 2 ---</div>
			<div className={`${color3} m-1`}>--- 3 ---</div>
		</div>
	);
};

export default Counter;
