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

const Else: React.FC<Props> = ({ state, setState, index, type }) => {
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
					<div className="">{'else {'}</div>
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

export default Else;
