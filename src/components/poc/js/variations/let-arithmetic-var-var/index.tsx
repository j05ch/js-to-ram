import * as React from 'react';
import { Dispatch } from 'react';
import InputText from '../input-text';

interface Props {
	index: number;
	state: Object;
	setState: Dispatch<React.SetStateAction<{}>>;
}

const LetArithmeticVarVar: React.FC<Props> = ({ index, state, setState }) => {
	return (
		<>
			<p>{index}</p>
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
					placeHolder={'b'}
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
					placeHolder={'c'}
					name={'operandRight'}
				/>
				<div>;</div>
			</div>
		</>
	);
};

export default LetArithmeticVarVar;
