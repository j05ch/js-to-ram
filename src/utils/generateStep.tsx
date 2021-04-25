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

export const generateStep = (
	element: any,
	lineNo: number,
	blockStart: number,
	jumpTarget: number
) => {
	if (!element || !element.type) return { arr: [], lineNo, lastStep: true };
	const codeOutput = [];
	const ramProgram: Array<string> = [];
	const { type } = element;
	let lineComplete = false;
	let pc = 0;
	let breakPc = 0;

	function pushAssemblerLine(c: string) {
		const [line, ...code] = element[c].split(' ');
		codeOutput.push(<AssemblerLine code={code.join(' ')} lineNo={line} />);
	}

	switch (type) {
		case Components.LET_ARITHMETIC_NUM_NUM:
			codeOutput.push(
				<LetArithmeticNumNumOutput
					isLet
					varField={element.varField}
					numLeft={element.operandLeft}
					operator={element.operator}
					numRight={element.operandRight}
					mark1={element.mark1}
					mark2={element.mark2}
					mark3={element.mark3}
				/>
			);
			['code1', 'code2', 'code3', 'code4'].forEach((c) => {
				if (element[c] != '') {
					if (c === 'code1') pc = lineNo;
					if (c === 'code4') breakPc = lineNo;
					// program.push(`${lineNo} ${data[c]}`);
					ramProgram.push(element[c]);
					pushAssemblerLine(c);
					lineNo++;
					lineComplete = true;
				}
			});
			break;
		case Components.LET_ARITHMETIC_VAR_VAR:
			codeOutput.push(
				<LetArithmeticNumNumOutput
					isLet
					varField={element.varField}
					numLeft={element.varLeft}
					operator={element.operator}
					numRight={element.varRight}
					mark1={element.mark1}
					mark2={element.mark2}
					mark3={element.mark3}
				/>
			);
			['code1', 'code2', 'code3', 'code4'].forEach((c) => {
				if (element[c] != '') {
					if (c === 'code1') pc = lineNo;
					if (c === 'code4') breakPc = lineNo;
					ramProgram.push(element[c]);
					pushAssemblerLine(c);
					lineNo++;
					lineComplete = true;
				}
			});
			break;
		case Components.LET_ARITHMETIC_VAR_NUM:
			codeOutput.push(
				<LetArithmeticNumNumOutput
					isLet
					varField={element.varField}
					numLeft={element.varLeft}
					operator={element.operator}
					numRight={element.numRight}
					mark1={element.mark1}
					mark2={element.mark2}
					mark3={element.mark3}
				/>
			);
			['code1', 'code2', 'code3', 'code4'].forEach((c) => {
				if (element[c] != '') {
					if (c === 'code1') pc = lineNo;
					if (c === 'code4') breakPc = lineNo;
					ramProgram.push(element[c]);
					pushAssemblerLine(c);
					lineNo++;
					lineComplete = true;
				}
			});
			break;
		case Components.LET_ARITHMETIC_NUM_VAR:
			codeOutput.push(
				<LetArithmeticNumNumOutput
					isLet
					varField={element.varField}
					numLeft={element.numLeft}
					operator={element.operator}
					numRight={element.varRight}
					mark1={element.mark1}
					mark2={element.mark2}
					mark3={element.mark3}
				/>
			);
			['code1', 'code2', 'code3', 'code4'].forEach((c) => {
				if (element[c] != '') {
					if (c === 'code1') pc = lineNo;
					if (c === 'code4') breakPc = lineNo;
					ramProgram.push(element[c]);
					pushAssemblerLine(c);
					lineNo++;
					lineComplete = true;
				}
			});
			break;
		case Components.ARITHMETIC_NUM_NUM:
			codeOutput.push(
				<LetArithmeticNumNumOutput
					isLet={false}
					varField={element.varField}
					numLeft={element.operandLeft}
					operator={element.operator}
					numRight={element.operandRight}
					mark1={element.mark1}
					mark2={element.mark2}
					mark3={element.mark3}
				/>
			);
			['code1', 'code2', 'code3', 'code4'].forEach((c) => {
				if (element[c] != '') {
					if (c === 'code1') pc = lineNo;
					if (c === 'code4') breakPc = lineNo;
					ramProgram.push(element[c]);
					pushAssemblerLine(c);
					lineNo++;
					lineComplete = true;
				}
			});
			break;
		case Components.ARITHMETIC_VAR_VAR:
			codeOutput.push(
				<LetArithmeticNumNumOutput
					isLet={false}
					varField={element.varField}
					numLeft={element.varLeft}
					operator={element.operator}
					numRight={element.varRight}
					mark1={element.mark1}
					mark2={element.mark2}
					mark3={element.mark3}
				/>
			);
			['code1', 'code2', 'code3', 'code4'].forEach((c) => {
				if (element[c] != '') {
					if (c === 'code1') pc = lineNo;
					if (c === 'code4') breakPc = lineNo;
					ramProgram.push(element[c]);
					pushAssemblerLine(c);
					lineNo++;
					lineComplete = true;
				}
			});
			break;
		case Components.ARITHMETIC_VAR_NUM:
			codeOutput.push(
				<LetArithmeticNumNumOutput
					isLet={false}
					varField={element.varField}
					numLeft={element.varLeft}
					operator={element.operator}
					numRight={element.numRight}
					mark1={element.mark1}
					mark2={element.mark2}
					mark3={element.mark3}
				/>
			);
			['code1', 'code2', 'code3', 'code4'].forEach((c) => {
				if (element[c] != '') {
					if (c === 'code1') pc = lineNo;
					if (c === 'code4') breakPc = lineNo;
					ramProgram.push(element[c]);
					pushAssemblerLine(c);
					lineNo++;
					lineComplete = true;
				}
			});
			break;
		case Components.ARITHMETIC_NUM_VAR:
			codeOutput.push(
				<LetArithmeticNumNumOutput
					isLet={false}
					varField={element.varField}
					numLeft={element.numLeft}
					operator={element.operator}
					numRight={element.varRight}
					mark1={element.mark1}
					mark2={element.mark2}
					mark3={element.mark3}
				/>
			);
			['code1', 'code2', 'code3', 'code4'].forEach((c) => {
				if (element[c] != '') {
					if (c === 'code1') pc = lineNo;
					if (c === 'code4') breakPc = lineNo;
					ramProgram.push(element[c]);
					pushAssemblerLine(c);
					lineNo++;
					lineComplete = true;
				}
			});
			break;
		case Components.LET:
			codeOutput.push(
				<LetOutput
					varField={element.varField}
					value={element.value}
					mark1={element.mark1}
					mark2={element.mark2}
				/>
			);
			['code1', 'code2', 'code3'].forEach((c) => {
				if (element[c] != '') {
					if (c === 'code1') pc = lineNo;
					if (c === 'code3') breakPc = lineNo;
					// program.push(`${lineNo} ${data[c]}`);
					ramProgram.push(element[c]);
					pushAssemblerLine(c);
					lineNo++;
					lineComplete = true;
				}
			});
			break;
		case Components.LET_VAR:
			codeOutput.push(
				<LetVarOutput
					varField={element.varField}
					varValue={element.varValue}
					mark1={element.mark1}
					mark2={element.mark2}
				/>
			);
			['code1', 'code2', 'code3'].forEach((c) => {
				if (element[c] != '') {
					if (c === 'code1') pc = lineNo;
					if (c === 'code3') breakPc = lineNo;
					ramProgram.push(element[c]);
					pushAssemblerLine(c);
					lineNo++;
					lineComplete = true;
				}
			});
			break;
		case Components.VAR_VAR:
			codeOutput.push(
				<VarVarOutput
					varField={element.varField}
					varValue={element.varValue}
					mark1={element.mark1}
					mark2={element.mark2}
				/>
			);
			['code1', 'code2', 'code3'].forEach((c) => {
				if (element[c] != '') {
					if (c === 'code1') pc = lineNo;
					if (c === 'code3') breakPc = lineNo;
					ramProgram.push(element[c]);
					pushAssemblerLine(c);
					lineNo++;
					lineComplete = true;
				}
			});
			break;
		case Components.VAR_NUM:
			codeOutput.push(
				<VarVarOutput
					varField={element.varField}
					varValue={element.value}
					mark1={element.mark1}
					mark2={element.mark2}
				/>
			);
			['code1', 'code2', 'code3'].forEach((c) => {
				if (element[c] != '') {
					if (c === 'code1') pc = lineNo;
					if (c === 'code3') breakPc = lineNo;
					ramProgram.push(element[c]);
					pushAssemblerLine(c);
					lineNo++;
					lineComplete = true;
				}
			});
			break;
		case Components.IF:
			codeOutput.push(
				<IfOutput
					varLeft={element.varLeft}
					varRight={element.varRight}
					operator={element.operator}
					mark1={element.mark1}
					mark2={element.mark2}
					mark3={element.mark3}
				/>
			);
			['code1', 'code2', 'code3'].forEach((c) => {
				if (element[c] != '') {
					if (c === 'code1') pc = lineNo;
					if (c === 'code3') breakPc = lineNo;
					ramProgram.push(element[c]);
					pushAssemblerLine(c);
					lineNo++;
					lineComplete = true;
				}
			});
			break;
		case Components.END_IF:
			codeOutput.push(<div>{'}'}</div>);
			// 6
			pc = blockStart;
			// 12
			breakPc = jumpTarget;
			// 13
			lineNo = jumpTarget;
			break;
		case Components.ELSE:
			codeOutput.push(<ElseOutput mark1={element.mark1} />);
			['code1'].forEach((c) => {
				if (element[c] != '') {
					if (c === 'code1') pc = lineNo;
					if (c === 'code1') breakPc = lineNo;
					ramProgram.push(element[c]);
					pushAssemblerLine(c);
					lineNo++;
					lineComplete = true;
				}
			});
			break;
		case Components.END_ELSE:
			codeOutput.push(<div>{'}'}</div>);
			// 6
			pc = blockStart;
			// 12
			breakPc = jumpTarget;
			// 13
			lineNo = jumpTarget + 1;
			break;
		case Components.LOG:
			codeOutput.push(
				<ConsoleLogOutput
					varField={element.varField}
					mark1={element.mark1}
				/>
			);
			['code1'].forEach((c) => {
				if (element[c] != '') {
					if (c === 'code1') pc = lineNo;
					if (c === 'code1') breakPc = lineNo;
					ramProgram.push(element[c]);
					pushAssemblerLine(c);
					lineNo++;
					lineComplete = true;
				}
			});
			break;
	}

	const { lastStep, insideBlock } = element;

	return {
		codeOutput,
		ramProgram,
		lineNo,
		lastStep,
		insideBlock,
		lineComplete,
		pc,
		breakPc,
	};
};
