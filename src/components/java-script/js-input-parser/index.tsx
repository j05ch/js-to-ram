import * as React from 'react';
import { useState } from 'react';
import { parseJsInput } from '../../../utils/parseJsInput';
import { useInterval } from '../../../hooks/useInterval';
import { generateStep } from '../../../utils/generateStep';
import Button from '../../common/Button';

interface Props {
	inputModel: any;
	buildProgram: (arr: Array<string>) => void;
}

const JSInputParser: React.FC<Props> = ({ inputModel, buildProgram }) => {
	const [componentsArr, setComponentsArr] = useState<any>([]);
	const [completeDisplay, setCompleteDisplay] = useState<any>([]);
	const [programArray, setProgramArray] = useState<Array<string>>([]);
	const [isRunning, setIsRunning] = useState(false);
	const [counter, setCounter] = useState(0);
	const [lineNo, setLineNo] = useState(0);
	useInterval(machineStep, isRunning ? 2000 : null);
	const inputArr = parseJsInput(inputModel);

	function machineStep() {
		const output = generateStep(inputArr[counter], lineNo);
		if (output.lastStep) {
			setLineNo(output.lineNo);
			setComponentsArr([]);
			setCompleteDisplay([...completeDisplay, ...output.arr]);
			setProgramArray(
				output.program
					? [...programArray, ...output.program]
					: programArray
			);
		} else {
			setComponentsArr(output.arr);
		}
		setCounter(counter + 1);
	}

	return (
		<>
			<div className="flex justify-center p-2">
				<Button
					onClick={() => setIsRunning(true)}
					label={'RUN'}
					primary
				/>
			</div>
			<div>{completeDisplay}</div>
			<div>{componentsArr}</div>
			<div className="flex justify-center p-2">
				<Button
					onClick={() => buildProgram(programArray)}
					label={'LOAD RAM'}
				/>
			</div>
		</>
	);
};

export default JSInputParser;
