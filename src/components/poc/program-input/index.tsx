import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
	setState: Dispatch<SetStateAction<string>>;
}

const ProgramInput: React.FC<Props> = ({ setState }) => {
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
				defaultValue="Input program"
				onChange={handleChange}
			/>
		</div>
	);
};

export default ProgramInput;
