import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
	setState: Dispatch<SetStateAction<string>>;
	value: string;
}

const ProgramInput: React.FC<Props> = ({ setState, value }) => {
	function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setState(String(e.target.value));
	}

	return (
		<div>
			<textarea
				id="program-input"
				name="program-input"
				rows={5}
				cols={33}
				defaultValue={value}
				onChange={handleChange}
			/>
		</div>
	);
};

export default ProgramInput;
