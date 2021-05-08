import * as React from 'react';
import { Components } from '../actions/components';
import LetArithmeticNumNumOutput from '../components/java-script/js-output/variations/let-arithmetic-num-num-output';
import LetOutput from '../components/java-script/js-output/variations/let-output';
import AssemblerLine from '../components/java-script/js-output/assembler-line';
import LetVarOutput from '../components/java-script/js-output/variations/let-var-output';
import VarVarOutput from '../components/java-script/js-output/variations/var-var-output';
import IfOutput from '../components/java-script/js-output/variations/if-output';
import ConsoleLogOutput from '../components/java-script/js-output/variations/console-log-output';
import ElseOutput from '../components/java-script/js-output/variations/else-output';
import WhileOutput from '../components/java-script/js-output/variations/while-output';
import { StepInterface } from '../types/StepInterface';

export const generateStep = (
	element: StepInterface,
	lineNo: number,
	blockStart: number,
	jumpTarget: number
) => {
	const codeOutput: JSX.Element[] = [];
	const ramProgram: string[] = [];
	const { type } = element;
	let pc = 0;
	let breakPc = 0;
	if (!element || !element.type)
		return {
			codeOutput,
			ramProgram,
			lineNo,
			lastStep: true,
			insideBlock: false,
			pc,
			breakPc,
		};

	function pushAssemblerLine(c: string) {
		const [line, ...code] = element[c]!.toString().split(' ');
		codeOutput.push(<AssemblerLine code={code.join(' ')} lineNo={line} />);
	}

	function processCodeLines(codeArr: string[]) {
		codeArr.forEach((c) => {
			if (element[c] != '') {
				if (c === codeArr[0]) pc = lineNo;
				if (c === codeArr[codeArr.length - 1]) breakPc = lineNo;
				ramProgram.push(element[c]!.toString());
				pushAssemblerLine(c);
				lineNo++;
			}
		});
	}

	switch (type) {
		case Components.LET_ARITHMETIC_NUM_NUM:
			codeOutput.push(
				<LetArithmeticNumNumOutput
					isLet
					varField={element.varField!}
					numLeft={element.operandLeft!}
					operator={element.operator!}
					numRight={element.operandRight!}
					mark1={element.mark1!}
					mark2={element.mark2!}
					mark3={element.mark3!}
				/>
			);
			processCodeLines(['code1', 'code2', 'code3', 'code4']);
			break;
		case Components.LET_ARITHMETIC_VAR_VAR:
			codeOutput.push(
				<LetArithmeticNumNumOutput
					isLet
					varField={element.varField!}
					numLeft={element.varLeft!}
					operator={element.operator!}
					numRight={element.varRight!}
					mark1={element.mark1!}
					mark2={element.mark2!}
					mark3={element.mark3!}
				/>
			);
			processCodeLines(['code1', 'code2', 'code3', 'code4']);
			break;
		case Components.LET_ARITHMETIC_VAR_NUM:
			codeOutput.push(
				<LetArithmeticNumNumOutput
					isLet
					varField={element.varField!}
					numLeft={element.varLeft!}
					operator={element.operator!}
					numRight={element.numRight!}
					mark1={element.mark1!}
					mark2={element.mark2!}
					mark3={element.mark3!}
				/>
			);
			processCodeLines(['code1', 'code2', 'code3', 'code4']);
			break;
		case Components.LET_ARITHMETIC_NUM_VAR:
			codeOutput.push(
				<LetArithmeticNumNumOutput
					isLet
					varField={element.varField!}
					numLeft={element.numLeft!}
					operator={element.operator!}
					numRight={element.varRight!}
					mark1={element.mark1!}
					mark2={element.mark2!}
					mark3={element.mark3!}
				/>
			);
			processCodeLines(['code1', 'code2', 'code3', 'code4']);
			break;
		case Components.ARITHMETIC_NUM_NUM:
			codeOutput.push(
				<LetArithmeticNumNumOutput
					isLet={false}
					varField={element.varField!}
					numLeft={element.operandLeft!}
					operator={element.operator!}
					numRight={element.operandRight!}
					mark1={element.mark1!}
					mark2={element.mark2!}
					mark3={element.mark3!}
				/>
			);
			processCodeLines(['code1', 'code2', 'code3', 'code4']);
			break;
		case Components.ARITHMETIC_VAR_VAR:
			codeOutput.push(
				<LetArithmeticNumNumOutput
					isLet={false}
					varField={element.varField!}
					numLeft={element.varLeft!}
					operator={element.operator!}
					numRight={element.varRight!}
					mark1={element.mark1!}
					mark2={element.mark2!}
					mark3={element.mark3!}
				/>
			);
			processCodeLines(['code1', 'code2', 'code3', 'code4']);
			break;
		case Components.ARITHMETIC_VAR_NUM:
			codeOutput.push(
				<LetArithmeticNumNumOutput
					isLet={false}
					varField={element.varField!}
					numLeft={element.varLeft!}
					operator={element.operator!}
					numRight={element.numRight!}
					mark1={element.mark1!}
					mark2={element.mark2!}
					mark3={element.mark3!}
				/>
			);
			processCodeLines(['code1', 'code2', 'code3', 'code4']);
			break;
		case Components.ARITHMETIC_NUM_VAR:
			codeOutput.push(
				<LetArithmeticNumNumOutput
					isLet={false}
					varField={element.varField!}
					numLeft={element.numLeft!}
					operator={element.operator!}
					numRight={element.varRight!}
					mark1={element.mark1!}
					mark2={element.mark2!}
					mark3={element.mark3!}
				/>
			);
			processCodeLines(['code1', 'code2', 'code3', 'code4']);
			break;
		case Components.LET:
			codeOutput.push(
				<LetOutput
					varField={element.varField!}
					value={element.value!}
					mark1={element.mark1!}
					mark2={element.mark2!}
				/>
			);
			processCodeLines(['code1', 'code2', 'code3']);
			break;
		case Components.LET_VAR:
			codeOutput.push(
				<LetVarOutput
					varField={element.varField!}
					varValue={element.varValue!}
					mark1={element.mark1!}
					mark2={element.mark2!}
				/>
			);
			processCodeLines(['code1', 'code2', 'code3']);
			break;
		case Components.VAR_VAR:
			codeOutput.push(
				<VarVarOutput
					varField={element.varField!}
					varValue={element.varValue!}
					mark1={element.mark1!}
					mark2={element.mark2!}
				/>
			);
			processCodeLines(['code1', 'code2', 'code3']);
			break;
		case Components.VAR_NUM:
			codeOutput.push(
				<VarVarOutput
					varField={element.varField!}
					varValue={element.value!}
					mark1={element.mark1!}
					mark2={element.mark2!}
				/>
			);
			processCodeLines(['code1', 'code2', 'code3']);
			break;
		case Components.IF:
			codeOutput.push(
				<IfOutput
					varLeft={element.varLeft!}
					varRight={element.varRight!}
					operator={element.operator!}
					mark1={element.mark1!}
					mark2={element.mark2!}
					mark3={element.mark3!}
				/>
			);
			processCodeLines(['code1', 'code2', 'code3']);
			break;
		case Components.END_IF:
			codeOutput.push(<div>{'}'}</div>);
			pc = blockStart;
			breakPc = jumpTarget;
			lineNo = jumpTarget;
			break;
		case Components.ELSE:
			codeOutput.push(<ElseOutput mark1={element.mark1!} />);
			processCodeLines(['code1']);
			break;
		case Components.END_ELSE:
			codeOutput.push(<div>{'}'}</div>);
			pc = blockStart;
			breakPc = jumpTarget;
			lineNo = jumpTarget + 1;
			break;
		case Components.WHILE:
			codeOutput.push(
				<WhileOutput
					varLeft={element.varLeft!}
					varRight={element.varRight!}
					operator={element.operator!}
					mark1={element.mark1!}
					mark2={element.mark2!}
					mark3={element.mark3!}
				/>
			);
			processCodeLines(['code1', 'code2', 'code3']);
			break;
		case Components.END_WHILE:
			const codeSplit = element['code4']!.split(' ');
			codeOutput.push(
				<div className="flex flex-col">
					<div>{'}'}</div>
					<div>{`${codeSplit[1]} ${codeSplit[2]}`}</div>
				</div>
			);
			ramProgram.push(element['code4']!);
			pc = blockStart;
			breakPc = jumpTarget;
			lineNo = jumpTarget + 2;
			break;
		case Components.LOG:
			codeOutput.push(
				<ConsoleLogOutput
					varField={element.varField!}
					mark1={element.mark1!}
				/>
			);
			processCodeLines(['code1']);
			break;
		default:
			console.error('Component not found.');
	}

	const { lastStep, insideBlock } = element;

	return {
		codeOutput,
		ramProgram,
		lineNo,
		lastStep,
		insideBlock,
		pc,
		breakPc,
	};
};
