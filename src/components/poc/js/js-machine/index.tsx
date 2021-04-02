import * as React from 'react';
import LetArithmeticVarVar from '../variations/let-arithmetic-var-var';
import { useEffect, useState } from 'react';
import VariationsContainer from '../variations-container';

interface Props {}

const JSMachine: React.FC<Props> = () => {
	const [state, setState] = useState({});

	return (
		<>
			<VariationsContainer />
		</>
	);
};

export default JSMachine;
