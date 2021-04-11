import * as React from 'react';
import { Dispatch, useEffect, useState } from 'react';
import InputText from '../input-text';
import { ComponentsKey } from '../../../../actions/components';

interface Props {
	index: number;
	state: any;
	setState: Dispatch<React.SetStateAction<{}>>;
	type: ComponentsKey;
}

const LetArithmeticNumVar: React.FC<Props> = ({
	index,
	state,
	setState,
	type,
}) => {
	const [localState, setLocalState] = useState(state[index]);

	useEffect(() => {
		setLocalState({ ...state[index] });
	}, [index]);

	useEffect(() => {
		setState({
			...state,
			[index]: { ...state[index], ...localState, type },
		});
	}, [localState, index]);

	return (
		<>
			<div className="flex justify-around p-4 m-2 w-96 border rounded font-mono text-base">
				{console.log('Local State in Num Num', localState)}
				<div className="">let</div>
				<InputText
					state={state[index]}
					setState={setLocalState}
					placeHolder={'a'}
					name={'varField'}
				/>
				<div className="">=</div>
				<InputText
					state={state[index]}
					setState={setLocalState}
					placeHolder={'4'}
					name={'numLeft'}
				/>
				<select
					className="text-center"
					onChange={(e) =>
						setLocalState({
							...localState,
							operator: e.target.value,
						})
					}
					value={
						state[index] && state[index].operator
							? state[index].operator
							: 'initial'
					}
					// value={
					// 	localState && localState.operator
					// 		? localState.operator
					// 		: 'initial'
					// }
				>
					<option value={'initial'}>...</option>
					<option value={'+'}>+</option>
					<option value={'-'}>-</option>
					<option value={'*'}>*</option>
					<option value={'/'}>/</option>
				</select>
				<InputText
					state={state[index]}
					setState={setLocalState}
					placeHolder={'b'}
					name={'varRight'}
				/>
				<div>;</div>
			</div>
		</>
	);
};

export default LetArithmeticNumVar;
