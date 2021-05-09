import * as React from 'react';
import { useEffect, useState } from 'react';
import { parseJsInput } from '../../../utils/parseJsInput';
import { useInterval } from '../../../hooks/useInterval';
import { generateStep } from '../../../utils/generateStep';
import { Components } from '../../../actions/components';
import MachineControl from '../../random-access-machine/machine-control';
import JsOutputCard from '../js-output/js-output-card';
import { StepInterface } from '../../../types/StepInterface';
import useLanguage from '../../../hooks/useLanguageContext';

interface InputInterface {
	codeOutput: JSX.Element[];
	ramProgram: string[];
	lineNo: number;
	lastStep: boolean;
	insideBlock: boolean;
	pc: number;
	breakPc: number;
}

interface Props {
	inputModel: any;
	buildRamProgram: (arr: string[]) => void;
	isJsRunning: boolean;
	setIsJsRunning: React.Dispatch<React.SetStateAction<boolean>>;
	setIsRamRunning: React.Dispatch<React.SetStateAction<boolean>>;
	setIsRamControlDisabled: React.Dispatch<React.SetStateAction<boolean>>;
	setIsJsControlDisabled: React.Dispatch<React.SetStateAction<boolean>>;
	setPc: React.Dispatch<React.SetStateAction<number | undefined>>;
	setBreakPc: React.Dispatch<React.SetStateAction<number | undefined>>;
	isJsControlDisabled: boolean;
}

const JSInputParser: React.FC<Props> = ({
	inputModel,
	buildRamProgram,
	isJsRunning,
	setIsJsRunning,
	setIsRamRunning,
	setIsRamControlDisabled,
	isJsControlDisabled,
	setIsJsControlDisabled,
	setPc,
	setBreakPc,
}) => {
	const [codeLines, setCodeLines] = useState<JSX.Element[]>([]);
	const [completeDisplay, setCompleteDisplay] = useState<JSX.Element[]>([]);
	const [ramProgram, setRamProgram] = useState<Array<string>>([]);
	const [stepCounter, setStepCounter] = useState(0);
	const [lineNo, setLineNo] = useState(0);
	const [preparedInput, setPreparedInput] = useState<InputInterface[]>([]);

	const locale = useLanguage().language;

	const [delay, setDelay] = useState(2000);
	useInterval(jsStep, isJsRunning ? delay : null);

	useEffect(() => {
		const inputArr = parseJsInput(inputModel, 0);
		const reorderedInputArr = findAndReplaceJumpTargets(inputArr.parsedArr);
		setPreparedInput(prepareInput(reorderedInputArr));
		setIsJsControlDisabled(false);
	}, []);

	function findAndReplaceJumpTargets(arr: StepInterface[]) {
		const reversed = arr.reverse();
		let lineNolocal = 0;
		let elseSkipLineNo = 0;
		reversed.forEach((r: StepInterface, index: number) => {
			if (
				(r.type === Components.IF || r.type === Components.WHILE) &&
				r['code3'] !== ''
			) {
				const jumpCode = r['code3'];
				const jcArr = jumpCode!.split(' ');
				jcArr[2] =
					elseSkipLineNo !== 0
						? elseSkipLineNo.toString()
						: lineNolocal.toString();
				r['code3'] = jcArr.join(' ');
			}
			if (
				r.type === Components.END_ELSE ||
				r.type === Components.END_IF
			) {
				lineNolocal = reversed[index + 2].lineNo + 1;
			}
			if (r.type === Components.ELSE && r['code1'] !== '') {
				const jumpCode = r['code1'];
				const jcArr = jumpCode!.split(' ');
				jcArr[2] = lineNolocal.toString();
				r['code1'] = jcArr.join(' ');
				elseSkipLineNo = r.lineNo + 1;
			}
			if (r.type === Components.END_WHILE) {
				lineNolocal = reversed[index].lineNo + 1;
			}
		});

		return reversed.reverse();
	}

	function prepareInput(input: StepInterface[]) {
		let lineNoLocal = 0;
		let blockStart = 0;
		let jumpTarget = 0;
		const preparedInput = input.map((e) => {
			blockStart =
				e.type ===
					(Components.IF || Components.ELSE || Components.WHILE) &&
				e.code1 === ''
					? e.lineNo
					: blockStart;
			jumpTarget =
				e.type === Components.END_IF ? e.lineNo - 1 : jumpTarget;
			jumpTarget =
				e.type === Components.END_ELSE ? e.lineNo - 1 : jumpTarget;
			jumpTarget =
				e.type === Components.END_WHILE ? e.lineNo - 1 : jumpTarget;
			const step = generateStep(e, lineNoLocal, blockStart, jumpTarget);
			lineNoLocal = step.lastStep ? step.lineNo : lineNoLocal;
			return step;
		});
		setLineNo(lineNoLocal);
		return preparedInput;
	}

	function jsStep() {
		if (stepCounter > preparedInput.length - 1) {
			buildRamProgram([...ramProgram, `${lineNo} HALT`]);
			setPc(lineNo);
			setBreakPc(lineNo + 1);
			setIsJsRunning(false);
			setIsRamControlDisabled(false);
			setIsJsControlDisabled(true);
			setIsRamRunning(true);
			return;
		}
		const step = preparedInput[stepCounter];
		if (step.insideBlock) {
			setCodeLines([]);
			const outputCard = (
				<JsOutputCard key={`card-${String(stepCounter)}`}>
					{step.codeOutput}
				</JsOutputCard>
			);
			setCompleteDisplay([...completeDisplay, outputCard]);
			setRamProgram(
				step.ramProgram
					? [...ramProgram, ...step.ramProgram]
					: ramProgram
			);
			buildRamProgram(
				step.ramProgram
					? [...ramProgram, ...step.ramProgram]
					: ramProgram
			);
		} else if (step.lastStep) {
			setCodeLines([]);
			const codeCard = (
				<JsOutputCard key={`card-${String(stepCounter)}`}>
					{step.codeOutput}
				</JsOutputCard>
			);
			setCompleteDisplay([...completeDisplay, codeCard]);
			setRamProgram(
				step.ramProgram
					? [...ramProgram, ...step.ramProgram]
					: ramProgram
			);
			buildRamProgram(
				step.ramProgram
					? [...ramProgram, ...step.ramProgram]
					: ramProgram
			);
			setPc(step.pc);
			setBreakPc(step.breakPc);
			setIsJsRunning(false);
			setIsRamControlDisabled(false);
			setIsJsControlDisabled(true);
			setIsRamRunning(true);
		} else {
			setCodeLines(step.codeOutput);
			setIsRamControlDisabled(true);
		}
		setStepCounter(stepCounter + 1);
	}

	return (
		<div className="flex flex-col justify-center items-center mt-4 mb-4">
			<div className="flex flex-row gap-1 flex-wrap ml-2 mb-3">
				{completeDisplay}
				{codeLines.length > 0 && (
					<div>
						<JsOutputCard
							key={`card-return-${String(stepCounter)}`}
						>
							{codeLines}
						</JsOutputCard>
					</div>
				)}
			</div>
			<MachineControl
				doStep={jsStep}
				delay={delay}
				setDelay={setDelay}
				isRunning={isJsRunning}
				setIsRunning={setIsJsRunning}
				disabled={isJsControlDisabled}
			/>
		</div>
	);
};

export default JSInputParser;
