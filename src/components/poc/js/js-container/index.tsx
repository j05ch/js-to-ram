import * as React from 'react';
import { useState } from 'react';
import VariationsContainer from '../variations-container';
import JSInputParser from '../js-input-parser';

interface Props {}

const JsContainer: React.FC<Props> = () => {
	const [show, setShow] = useState({
		jsInput: true,
		jsOutput: false,
		showBtn: true,
	});
	const [state, setState] = useState({});

	return (
		<>
			{show.jsInput && (
				<VariationsContainer state={state} setState={setState} />
			)}
			{show.jsOutput && <JSInputParser inputModel={state} />}
			{show.showBtn && (
				<button
					onClick={() =>
						setShow({
							jsInput: false,
							jsOutput: true,
							showBtn: false,
						})
					}
				>
					LOAD
				</button>
			)}
		</>
	);
};

export default JsContainer;
