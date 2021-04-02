import * as React from 'react';
import { Dispatch, useEffect, useState } from 'react';
import InputText from '../input-text';
import VariationsChildContainer from '../../variations-child-container';

interface Props {
	state: any;
	setState: Dispatch<React.SetStateAction<{}>>;
	index: number;
}

const For: React.FC<Props> = ({ state, setState, index }) => {
	const [localState, setLocalState] = useState(state[index]);

	useEffect(() => {
		setLocalState({ ...state[index] });
	}, [index]);

	useEffect(() => {
		setState({ ...state, [index]: { ...state[index], ...localState } });
	}, [localState, index]);

	return (
		<>
			<div className="bg-blue-300">
				<div className="flex justify-around p-4 m-2 w-96 border rounded font-mono text-base">
					<div className="">for ( let </div>
					<InputText
						state={state[index]}
						setState={setLocalState}
						placeHolder={'i'}
						name={'var'}
					/>
					<div>=</div>
					<InputText
						state={state[index]}
						setState={setLocalState}
						placeHolder={'123'}
						name={'varValue'}
					/>
					<div>;</div>
					{state[index] && state[index]['var'] && (
						<div>{state[index]['var']}</div>
					)}
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
						name={'value'}
					/>
					<div>;</div>
					{state[index] && state[index]['var'] && (
						<div>{state[index]['var']}</div>
					)}
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
								? state[index].mutate
								: 'initial'
						}
					>
						<option value={'initial'}>...</option>
						<option value={'++'}>++</option>
						<option value={'--'}>--</option>
					</select>
					<div>{';) {'}</div>
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

export default For;
