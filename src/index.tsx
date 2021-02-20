import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
// import AppContainer from './components/app-container';
import JSParser from './components/poc/js-parser';

ReactDOM.render(
	<React.StrictMode>
		{/*<AppContainer />*/}
		<JSParser />
	</React.StrictMode>,
	document.getElementById('root')
);
