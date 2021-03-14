import * as React from 'react';
import {Dispatch} from "react";

interface Props {
    state: Object;
    setState: Dispatch<React.SetStateAction<{}>>;
    placeHolder: string;
    name: string;
}

const InputText: React.FC<Props> = ({state, setState, placeHolder, name}) => {
	return (
        <input className="bg-blue-100 text-center"
               type="text"
               size={5}
               placeholder={placeHolder}
               onChange={(e) => setState({...state, [name]: e.target.value})}
        />
	);
};

export default InputText;
