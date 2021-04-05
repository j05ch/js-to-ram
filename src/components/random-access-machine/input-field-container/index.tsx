import * as React from 'react';
import InputField from '../../common/input-field';
import { Dispatch, SetStateAction } from 'react';

interface Props {
	state: string;
	setState: Dispatch<SetStateAction<string>>;
}

const InputFieldContainer: React.FC<Props> = ({ state, setState }) => {
	return (
		<>
			<div>
				<InputField setState={setState} value={state} />
			</div>
		</>
	);
};

export default InputFieldContainer;
