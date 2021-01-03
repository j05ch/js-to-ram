import * as React from 'react';
import InputField from '../input-field';
import { Dispatch, SetStateAction } from 'react';

interface Props {
	state: string;
	setState: Dispatch<SetStateAction<string>>;
}

const InputContainer: React.FC<Props> = ({ state, setState }) => {
	return (
		<>
			<div>
				<InputField setState={setState} value={state} />
			</div>
		</>
	);
};

export default InputContainer;
