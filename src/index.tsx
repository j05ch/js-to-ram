import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
// import AppContainer from './components/app-container';
import JSParser from './components/poc/js/js-parser';
import LetArithmeticVarVar from './components/java-script/variations/let-arithmetic-var-var';
import JSMachine from './components/poc/js/js-machine';
import JSInputParser from './components/java-script/js-input-parser';
import { inputModelMock } from './components/poc/js/mock-data/inputModel';
import JsContainer from './components/java-script/js-container';

ReactDOM.render(
	<React.StrictMode>
		{/*<AppContainer />*/}
		{/*<JSMachine />*/}
		{/*<JSInputParser inputModel={inputModelMock} />*/}
		<JsContainer />
	</React.StrictMode>,
	document.getElementById('root')
);
