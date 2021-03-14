import * as React from 'react';
import { Dispatch } from 'react';
import {Components, ComponentsKey} from "../../../../actions/components";

interface Props {
	variations: ComponentsKey[];
	addVariation: Dispatch<React.SetStateAction<ComponentsKey[]>>;
}

const AddVariation: React.FC<Props> = ({variations, addVariation}) => {
	return (
	    <>
	        <div onClick={() => addVariation([...variations, Components.VARIATIONS_SELECTOR])}>+</div>
	    </>
	);
};

export default AddVariation;
