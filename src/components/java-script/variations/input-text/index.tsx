import * as React from 'react';
import { Dispatch } from 'react';

interface Props {
	state: any;
	setState: Dispatch<React.SetStateAction<{}>>;
	placeHolder: string;
	name: string;
}

const InputText: React.FC<Props> = ({ state, setState, placeHolder, name }) => {
	return (
		<>
			<input
				className="bg-blue-100 text-center rounded"
				type="text"
				size={5}
				placeholder={placeHolder}
				onChange={(e) =>
					setState({
						...state,
						[name]: e.target.value,
					})
				}
				value={state && state[name] ? state[name] : ''}
			/>
		</>
	);
};

export default InputText;
