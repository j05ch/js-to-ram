import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
	setState: Dispatch<SetStateAction<string>>;
	value: string;
	placeholder: string;
}

const InputField: React.FC<Props> = ({ setState, value, placeholder }) => {
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
				className="bg-blue-100 rounded"
				placeholder={placeholder}
			/>
		</div>
	);
};

export default InputField;
