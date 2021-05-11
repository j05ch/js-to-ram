import * as React from 'react';
import InputField from '../../common/input-field';
import { Dispatch, SetStateAction } from 'react';

interface Props {
	state: string;
	setState: Dispatch<SetStateAction<string>>;
	placeholder: string;
}

/**
 * Wrapper for input-field-component.
 * @param state
 * @param setState
 * @param placeholder
 * @returns {JSX.Element}
 */
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
