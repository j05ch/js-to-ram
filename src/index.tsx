import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import TestApp from './components/poc/test-app';

ReactDOM.render(
	<React.StrictMode>
		<TestApp />
	</React.StrictMode>,
	document.getElementById('root')
);
