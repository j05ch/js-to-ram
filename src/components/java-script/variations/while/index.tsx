import * as React from 'react';
import { Dispatch, useEffect, useState } from 'react';
import InputText from '../input-text';
import VariationsChildContainer from '../../variations-child-container';
import { ComponentsKey } from '../../../../actions/components';

interface Props {
	state: any;
	setState: Dispatch<React.SetStateAction<{}>>;
	index: number;
	type: ComponentsKey;
}

const While: React.FC<Props> = ({ state, setState, index, type }) => {
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
			<div className="ml-8 bg-blue-300 rounded">
				<div className="flex justify-around p-4 m-2 w-96 font-bold font-mono text-base">
					<div className="">while (</div>
					<InputText
						state={state[index]}
						setState={setLocalState}
						placeHolder={'a'}
						name={'varLeft'}
					/>
					<select
						className="text-center rounded"
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
					>
						<option value={'initial'}>...</option>
						<option value={'=='}>==</option>
						<option value={'>'}>{'>'}</option>
						<option value={'>='}>{'>='}</option>
					</select>
					<InputText
						state={state[index]}
						setState={setLocalState}
						placeHolder={'b'}
						name={'varRight'}
					/>
					<div>{') {'}</div>
				</div>
				<VariationsChildContainer
					state={state}
					setState={setState}
					index={index}
				/>
				<div className="p-4 m-2 w-96 font-bold font-mono text-base">
					{'}'}
				</div>
			</div>
		</>
	);
};

export default While;
