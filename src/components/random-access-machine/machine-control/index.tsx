import * as React from 'react';
import { labels } from '../../../models/labels';
import Button from '../../common/button';
import useLanguage from '../../../hooks/useLanguageContext';

interface Props {
	doStep: () => void;
	delay: number;
	setDelay: React.Dispatch<React.SetStateAction<number>>;
	isRunning: boolean;
	setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
	disabled: boolean;
}

const MachineControl: React.FC<Props> = ({
	doStep,
	delay,
	setDelay,
	isRunning,
	setIsRunning,
	disabled,
}) => {
	const locale = useLanguage().language;

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
			<div className="flex gap-1 items-center">
				<Button
					label={
						isRunning ? labels[locale].PAUSE : labels[locale].PLAY
					}
					onClick={() => handleSpeed(labels[locale].PAUSE)}
					primary
					disabled={disabled}
				/>
				<Button
					label={labels[locale].STEP}
					onClick={() => handleSpeed(labels[locale].STEP)}
					disabled={disabled}
				/>
				<Button
					label={labels[locale].SLOWER}
					onClick={() => handleSpeed(labels[locale].SLOWER)}
					disabled={disabled}
				/>
				<Button
					label={labels[locale].FASTER}
					onClick={() => handleSpeed(labels[locale].FASTER)}
					disabled={disabled}
				/>
				<p className="text-black font-bold">{delay} ms</p>
			</div>
		</>
	);
};

export default MachineControl;
