import * as React from 'react';
import InputField from '../../common/input-field';
import { Dispatch, SetStateAction } from 'react';

interface Props {
	state: string;
	setState: Dispatch<SetStateAction<string>>;
	placeholder: string;
}

const InputFieldContainer: React.FC<Props> = ({
	state,
	setState,
	placeholder,
}) => {
	return (
		<>
			<div>
				<InputField
					setState={setState}
					value={state}
					placeholder={placeholder}
				/>
			</div>
		</>
	);
};

export default InputFieldContainer;
