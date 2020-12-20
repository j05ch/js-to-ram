import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import Counter from './components/poc/counter';

ReactDOM.render(
	<React.StrictMode>
		<Counter />
	</React.StrictMode>,
	document.getElementById('root')
);
