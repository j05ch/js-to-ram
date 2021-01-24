import * as React from 'react';
import { useEffect, useState } from 'react';
import { labels } from '../../models/labels';

interface Props {
	doStep: () => void;
	delay: number;
	setDelay: React.Dispatch<React.SetStateAction<number>>;
	isRunning: boolean;
	setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

const MachineControl: React.FC<Props> = ({
	doStep,
	delay,
	setDelay,
	isRunning,
	setIsRunning,
}) => {
	const [locale, setLocale] = useState('DE');

	useEffect(() => setLocale('DE'), [locale]);

	function handleDelayChange(e: React.ChangeEvent<HTMLInputElement>) {
		setDelay(Number(e.target.value));
	}

	function handleIsRunning(
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) {
		setIsRunning(!isRunning);
	}

	function handleSpeed(action: string) {
		const MIN = 0;
		const MAX = 5000;
		const STEP = 500;

		switch (action) {
			case labels[locale].PAUSE:
				{
					setIsRunning(!isRunning);
				}
				break;
			case labels[locale].SLOWER:
				{
					if (delay + STEP <= MAX) {
						setDelay(delay + STEP);
					}
				}
				break;
			case labels[locale].FASTER:
				{
					if (delay - STEP >= MIN) {
						setDelay(delay - STEP);
					}
				}
				break;
			case labels[locale].STEP:
				{
					setIsRunning(false);
					doStep();
				}
				break;
			default:
				console.error('CONTROL ERROR');
		}
	}

	return (
		<>
			<div>
				<button
					className="dark:text-black bg-blue-50 p-1 m-1 rounded border-2"
					onClick={() => handleSpeed(labels[locale].PAUSE)}
				>
					{isRunning ? labels[locale].PAUSE : labels[locale].PLAY}
				</button>
				<button
					className="dark:text-black bg-blue-50 p-1 m-1 rounded border-2"
					onClick={() => handleSpeed(labels[locale].STEP)}
				>
					{labels[locale].STEP}
				</button>
				<button
					className="dark:text-black bg-blue-50 p-1 m-1 rounded border-2"
					onClick={() => handleSpeed(labels[locale].SLOWER)}
				>
					{labels[locale].SLOWER}
				</button>
				<button
					className="dark:text-black bg-blue-50 p-1 m-1 rounded border-2"
					onClick={() => handleSpeed(labels[locale].FASTER)}
				>
					{labels[locale].FASTER}
				</button>
				<p className="dark:text-black font-bold">{delay}</p>
			</div>
		</>
	);
};

export default MachineControl;
