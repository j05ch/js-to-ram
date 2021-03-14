import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
// import AppContainer from './components/app-container';
import JSParser from './components/poc/js/js-parser';
import LetArithmeticVarVar from "./components/poc/js/variations/let-arithmetic-var-var";
import JSMachine from "./components/poc/js/js-machine";

ReactDOM.render(
	<React.StrictMode>
		{/*<AppContainer />*/}
		<JSMachine />
	</React.StrictMode>,
	document.getElementById('root')
);
