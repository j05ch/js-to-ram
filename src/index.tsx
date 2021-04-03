import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
// import AppContainer from './components/app-container';
import JSParser from './components/poc/js/js-parser';
import LetArithmeticVarVar from './components/poc/js/variations/let-arithmetic-var-var';
import JSMachine from './components/poc/js/js-machine';
import JSInputParser from './components/poc/js/js-input-parser';
import { inputModelMock } from './components/poc/js/mock-data/inputModel';

ReactDOM.render(
	<React.StrictMode>
		{/*<AppContainer />*/}
		{/*<JSMachine />*/}
		<JSInputParser inputModel={inputModelMock} />
	</React.StrictMode>,
	document.getElementById('root')
);
