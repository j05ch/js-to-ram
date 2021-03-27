import * as React from 'react';
import { Dispatch } from 'react';

interface Props {
	index: number;
	state: any;
	setState: Dispatch<React.SetStateAction<{}>>;
	placeHolder: string;
	name: string;
}

const InputText: React.FC<Props> = ({
	index,
	state,
	setState,
	placeHolder,
	name,
}) => {
	return (
		<>
			<input
				className="bg-blue-100 text-center"
				type="text"
				size={5}
				placeholder={placeHolder}
				onChange={(e) =>
					setState({
						...state,
						[index]: { ...state[index], [name]: e.target.value },
					})
				}
				value={
					state[index] && state[index][name] ? state[index][name] : ''
				}
			/>
		</>
	);
};

export default InputText;
