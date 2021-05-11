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

/**
 * Input variation LetVar
 * @param index
 * @param state
 * @param setState
 * @param type
 * @returns {JSX.Element}
 */
const LetVar: React.FC<Props> = ({ index, state, setState, type }) => {
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
					placeHolder={'b'}
					name={'varValue'}
				/>
				<div>;</div>
			</div>
		</>
	);
};

export default LetVar;
