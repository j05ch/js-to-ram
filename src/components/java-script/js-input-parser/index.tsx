import * as React from 'react';
import { useEffect, useState } from 'react';
import { parseJsInput } from '../../../utils/parseJsInput';
import { useInterval } from '../../../hooks/useInterval';
import { generateStep } from '../../../utils/generateStep';
import Button from '../../common/Button';
import { labels } from '../../../models/labels';
import { Components } from '../../../actions/components';

type InputType = (
	| {
			arr: never[];
			lineNo: number;
			lastStep: boolean;
			program?: undefined;
			lineComplete?: undefined;
			pc?: undefined;
			breakPc?: undefined;
	  }
	| {
			arr: JSX.Element[];
			program: string[];
			lineNo: number;
			lastStep: any;
			lineComplete: boolean;
			pc: number;
			breakPc: number;
	  }
)[];

interface Props {
	inputModel: any;
	buildProgram: (arr: Array<string>) => void;
	isJsRunning: boolean;
	setIsJsRunning: React.Dispatch<React.SetStateAction<boolean>>;
	setIsRamRunning: React.Dispatch<React.SetStateAction<boolean>>;
	setPc: React.Dispatch<React.SetStateAction<number | undefined>>;
	setBreakPc: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const JSInputParser: React.FC<Props> = ({
	inputModel,
	buildProgram,
	isJsRunning,
	setIsJsRunning,
	setIsRamRunning,
	setPc,
	setBreakPc,
}) => {
	const [componentsArr, setComponentsArr] = useState<any>([]);
	const [completeDisplay, setCompleteDisplay] = useState<any>([]);
	const [programArray, setProgramArray] = useState<Array<string>>([]);
	const [counter, setCounter] = useState(0);
	const [lineNo, setLineNo] = useState(0);
	const [preparedInput, setPreparedInput] = useState<InputType>([]);
	useInterval(jsStep, isJsRunning ? 2000 : null);

	const [locale, setLocale] = useState('DE');
	useEffect(() => setLocale('DE'), [locale]);

	useEffect(() => {
		const inputArr = parseJsInput(inputModel, 0);
		const reorderedArr = findAndReplaceJumpTargets(inputArr.parsedArr);
		console.log('Reordered Arr', reorderedArr);
		setPreparedInput(prepareInput(reorderedArr));
	}, []);

	function findAndReplaceJumpTargets(arr: any) {
		const reversed = arr.reverse();
		let lineNo = 0;
		reversed.forEach((r: any, index: number) => {
			if (r.type === Components.END_IF) {
				lineNo = reversed[index + 1].lineNo + 1;
			}
			if (r.type === Components.IF && r.lastStep) {
				const jumpCode = r['code3'];
				const jcArr = jumpCode.split(' ');
				jcArr[2] = lineNo.toString();
				r['code3'] = jcArr.join(' ');
			}
		});

		return reversed.reverse();
	}

	function prepareInput(input: any[]) {
		let lineNoLocal = 0;
		const preparedInput = input.map((i) => {
			const temp = generateStep(i, lineNoLocal);
			lineNoLocal = temp.lastStep ? temp.lineNo : lineNoLocal;
			return temp;
		});
		setLineNo(lineNoLocal);
		return preparedInput;
	}

	// function jsStep() {
	// 	if (counter > inputArr.length - 1) {
	// 		buildProgram([...programArray, `${lineNo} HALT`]);
	// 		setPc(lineNo);
	// 		setBreakPc(lineNo + 1);
	// 		setIsJsRunning(false);
	// 		setIsRamRunning(true);
	// 		return;
	// 	}
	// 	const output = generateStep(inputArr[counter], lineNo);
	// 	if (output.lastStep) {
	// 		setLineNo(output.lineNo);
	// 		setComponentsArr([]);
	// 		setCompleteDisplay([...completeDisplay, ...output.arr]);
	// 		setProgramArray(
	// 			output.program
	// 				? [...programArray, ...output.program]
	// 				: programArray
	// 		);
	// 		buildProgram(
	// 			output.program
	// 				? [...programArray, ...output.program]
	// 				: programArray
	// 		);
	// 		setPc(output.pc);
	// 		setBreakPc(output.breakPc);
	// 		setIsJsRunning(false);
	// 		setIsRamRunning(true);
	// 	} else {
	// 		setComponentsArr(output.arr);
	// 	}
	// 	setCounter(counter + 1);
	// }

	function jsStep() {
		if (counter > preparedInput.length - 1) {
			buildProgram([...programArray, `${lineNo} HALT`]);
			setPc(lineNo);
			setBreakPc(lineNo + 1);
			setIsJsRunning(false);
			setIsRamRunning(true);
			return;
		}
		const output = preparedInput[counter];
		if (output.lastStep) {
			// setLineNo(output.lineNo);
			setComponentsArr([]);
			setCompleteDisplay([...completeDisplay, ...output.arr]);
			setProgramArray(
				output.program
					? [...programArray, ...output.program]
					: programArray
			);
			buildProgram(
				output.program
					? [...programArray, ...output.program]
					: programArray
			);
			setPc(output.pc);
			setBreakPc(output.breakPc);
			setIsJsRunning(false);
			setIsRamRunning(true);
		} else {
			setComponentsArr(output.arr);
		}
		setCounter(counter + 1);
	}

	return (
		<>
			<div className="flex justify-center p-2">
				<Button
					onClick={() => {
						setIsJsRunning(true);
					}}
					label={labels[locale].PLAY}
					primary
				/>
			</div>
			<div>{completeDisplay}</div>
			<div>{componentsArr}</div>
			<div className="flex justify-center p-2">
				<Button
					onClick={() => buildProgram(programArray)}
					label={labels[locale].LOAD_RAM}
				/>
			</div>
		</>
	);
};

export default JSInputParser;
