import * as React from 'react';
import { inputModelMock } from '../mock-data/inputModel';
import { useEffect, useState } from 'react';
import { parseJsInput } from '../../../../utils/parseJsInput';
import { Components } from '../../../../actions/components';
import LetArithmeticNumNumOutput from '../js-output/variations/let-arithmetic-num-num-output';
import { mapVariables } from '../../../../utils/mapVariables';
import Debug from '../../../debug/debug';

interface Props {
	inputModel: any;
}

const JSInputParser: React.FC<Props> = ({ inputModel }) => {
	const [componentsArr, setComponentsArr] = useState<any>([]);
	useEffect(() => {
		const inputArr = parseJsInput(inputModel);
		console.log(inputArr);
		const components = inputArr.map((i) => {
			if (i.type === Components.LET_ARITHMETIC_NUM_NUM) {
				return (
					<>
						<LetArithmeticNumNumOutput
							varField={i.varField}
							numLeft={i.operandLeft}
							operator={i.operator}
							numRight={i.operandRight}
						/>
					</>
				);
			}
		});
		setComponentsArr(components);
	}, [inputModel]);

	return (
		<>
			<div>{componentsArr}</div>
			<Debug data={parseJsInput(inputModel)} />
		</>
	);
};

export default JSInputParser;
