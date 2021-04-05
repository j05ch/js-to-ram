import * as React from 'react';
import { useState } from 'react';
import VariationsContainer from '../../../java-script/variations-container';

interface Props {}

const JSMachine: React.FC<Props> = () => {
	const [state, setState] = useState({});

	return (
		<>
			<VariationsContainer state={state} setState={setState} />
		</>
	);
};

export default JSMachine;
