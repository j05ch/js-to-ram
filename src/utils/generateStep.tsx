import * as React from 'react';
import { Components } from '../actions/components';
import LetArithmeticNumNumOutput from '../components/java-script/js-output/variations/let-arithmetic-num-num-output';
import LetOutput from '../components/java-script/js-output/variations/let-output';
import AssemblerLine from '../components/java-script/js-output/assembler-line';
import LetVarOutput from '../components/java-script/js-output/variations/let-var-output';

export const generateStep = (data: any, lineNo: number) => {
	if (!data || !data.type) return { arr: [], lineNo, lastStep: true };
	console.log('Data', data);
	const outputArr = [];
	const program: Array<string> = [];
	const { type } = data;
	let lineComplete = false;
	let pc = 0;
	let breakPc = 0;
	switch (type) {
		case Components.LET_ARITHMETIC_NUM_NUM:
			outputArr.push(
				<LetArithmeticNumNumOutput
					varField={data.varField}
					numLeft={data.operandLeft}
					operator={data.operator}
					numRight={data.operandRight}
					mark1={data.mark1}
					mark2={data.mark2}
					mark3={data.mark3}
				/>
			);
			['code1', 'code2', 'code3', 'code4'].forEach((c) => {
				if (data[c] != '') {
					if (c === 'code1') pc = lineNo;
					if (c === 'code4') breakPc = lineNo;
					program.push(`${lineNo} ${data[c]}`);
					outputArr.push(
						<AssemblerLine
							code={data[c]}
							lineNo={lineNo.toString()}
						/>
					);
					lineNo++;
					lineComplete = true;
				}
			});
			break;
		case Components.LET_ARITHMETIC_VAR_VAR:
			outputArr.push(
				<LetArithmeticNumNumOutput
					varField={data.varField}
					numLeft={data.varLeft}
					operator={data.operator}
					numRight={data.varRight}
					mark1={data.mark1}
					mark2={data.mark2}
					mark3={data.mark3}
				/>
			);
			['code1', 'code2', 'code3', 'code4'].forEach((c) => {
				if (data[c] != '') {
					if (c === 'code1') pc = lineNo;
					if (c === 'code4') breakPc = lineNo;
					program.push(`${lineNo} ${data[c]}`);
					outputArr.push(
						<AssemblerLine
							code={data[c]}
							lineNo={lineNo.toString()}
						/>
					);
					lineNo++;
					lineComplete = true;
				}
			});
			break;
		case Components.LET:
			outputArr.push(
				<LetOutput
					varField={data.varField}
					value={data.value}
					mark1={data.mark1}
					mark2={data.mark2}
				/>
			);
			['code1', 'code2', 'code3'].forEach((c) => {
				if (data[c] != '') {
					if (c === 'code1') pc = lineNo;
					if (c === 'code3') breakPc = lineNo;
					program.push(`${lineNo} ${data[c]}`);
					outputArr.push(
						<AssemblerLine
							code={data[c]}
							lineNo={lineNo.toString()}
						/>
					);
					lineNo++;
					lineComplete = true;
				}
			});
			break;
		case Components.LET_VAR:
			outputArr.push(
				<LetVarOutput
					varField={data.varField}
					varValue={data.varValue}
					mark1={data.mark1}
					mark2={data.mark2}
				/>
			);
			['code1', 'code2', 'code3'].forEach((c) => {
				if (data[c] != '') {
					if (c === 'code1') pc = lineNo;
					if (c === 'code3') breakPc = lineNo;
					program.push(`${lineNo} ${data[c]}`);
					outputArr.push(
						<AssemblerLine
							code={data[c]}
							lineNo={lineNo.toString()}
						/>
					);
					lineNo++;
					lineComplete = true;
				}
			});
			break;
	}

	const { lastStep } = data;

	return {
		arr: outputArr,
		program,
		lineNo,
		lastStep,
		lineComplete,
		pc,
		breakPc,
	};
};
