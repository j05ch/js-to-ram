import * as React from 'react';
import { Dispatch } from 'react';
import InputText from '../input-text';

interface Props {
	index: number;
	state: Object;
	setState: Dispatch<React.SetStateAction<{}>>;
}

const LetArithmeticNumNum: React.FC<Props> = ({ index, state, setState }) => {
	return (
		<>
			<div className="flex justify-around p-4 m-2 w-96 border rounded font-mono text-base">
				<div className="">let</div>
				<InputText
					state={state}
					setState={setState}
					placeHolder={'a'}
					name={'varField'}
				/>
				<div className="">=</div>
				<InputText
					state={state}
					setState={setState}
					placeHolder={'123'}
					name={'operandLeft'}
				/>
				<select
					className="text-center"
					onChange={(e) =>
						setState({ ...state, operator: e.target.value })
					}
				>
					<option>...</option>
					<option>+</option>
					<option>-</option>
					<option>*</option>
					<option>/</option>
				</select>
				<InputText
					state={state}
					setState={setState}
					placeHolder={'456'}
					name={'operandRight'}
				/>
				<div>;</div>
			</div>
		</>
	);
};

export default LetArithmeticNumNum;
