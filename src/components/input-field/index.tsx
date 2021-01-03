import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
	setState: Dispatch<SetStateAction<string>>;
	value: string;
}

const InputField: React.FC<Props> = ({ setState, value }) => {
	function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setState(String(e.target.value));
	}

	return (
		<div>
			<textarea
				rows={5}
				cols={20}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
};

export default InputField;
