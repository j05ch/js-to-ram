import * as React from 'react';
import { Components } from '../actions/components';
import LetArithmeticNumNumOutput from '../components/poc/js/js-output/variations/let-arithmetic-num-num-output';
import AssemblerLine from '../components/poc/js/js-output/assembler-line';

export const generateStep = (data: any, lineNo: number) => {
	if (!data || !data.type) return { arr: [], lineNo, lastStep: true };
	const outputArr = [];
	const type = data.type;
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
					outputArr.push(
						<AssemblerLine
							code={data[c]}
							lineNo={lineNo.toString()}
						/>
					);
					lineNo++;
				}
			});
	}

	const { lastStep } = data;

	return { arr: outputArr, lineNo, lastStep };
};
