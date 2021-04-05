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

const If: React.FC<Props> = ({ state, setState, index, type }) => {
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
			{console.log(
				'State in container and localState',
				state,
				localState
			)}
			<div className="bg-blue-300">
				<div className="flex justify-around p-4 m-2 w-96 border rounded font-mono text-base">
					<div className="">if (</div>
					<InputText
						state={state[index]}
						setState={setLocalState}
						placeHolder={'a'}
						name={'varLeft'}
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
				<div>{'}'}</div>
			</div>
		</>
	);
};

export default If;
