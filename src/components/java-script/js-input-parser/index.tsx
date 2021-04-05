import * as React from 'react';
import { useEffect, useState } from 'react';
import { parseJsInput } from '../../../utils/parseJsInput';
import { useInterval } from '../../../hooks/useInterval';
import { generateStep } from '../../../utils/generateStep';

interface Props {
	inputModel: any;
}

const JSInputParser: React.FC<Props> = ({ inputModel }) => {
	const [componentsArr, setComponentsArr] = useState<any>([]);
	const [completeDisplay, setCompleteDisplay] = useState<any>([]);
	const [isRunning, setIsRunning] = useState(false);
	const [counter, setCounter] = useState(0);
	const [lineNo, setLineNo] = useState(1);
	useInterval(machineStep, isRunning ? 2000 : null);
	const inputArr = parseJsInput(inputModel);

	function machineStep() {
		const output = generateStep(inputArr[counter], lineNo);
		if (output.lastStep) {
			setLineNo(output.lineNo);
			setComponentsArr([]);
			setCompleteDisplay([...completeDisplay, ...output.arr]);
		} else {
			setComponentsArr(output.arr);
		}
		setCounter(counter + 1);
	}

	return (
		<>
			<button onClick={() => setIsRunning(true)}>RUN</button>
			<div>{completeDisplay}</div>
			<div>{componentsArr}</div>
		</>
	);
};

export default JSInputParser;
