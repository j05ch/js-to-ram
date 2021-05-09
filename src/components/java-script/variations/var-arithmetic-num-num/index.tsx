import * as React from 'react';
import { Dispatch } from 'react';
import InputText from '../input-text';

interface Props {
	index: number;
	state: any;
	setState: Dispatch<React.SetStateAction<{}>>;
}

const VarArithmeticNumNum: React.FC<Props> = ({ index, state, setState }) => {
	return (
		<>
			<div className="flex justify-around p-4 m-2 w-96 border rounded font-mono text-base">
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
					placeHolder={'42'}
					name={'operandLeft'}
				/>
				<select
					className="text-center rounded"
					onChange={(e) =>
						setState({
							...state,
							[index]: {
								...state[index],
								operator: e.target.value,
							},
						})
					}
					value={
						state[index] && state[index].operator
							? state[index].operator
							: 'initial'
					}
				>
					<option value={'initial'}>...</option>
					<option value={'+'}>+</option>
					<option value={'-'}>-</option>
					<option value={'*'}>*</option>
					<option value={'/'}>/</option>
				</select>
				<InputText
					state={state}
					setState={setState}
					placeHolder={'23'}
					name={'operandRight'}
				/>
				<div>;</div>
			</div>
		</>
	);
};

export default VarArithmeticNumNum;
