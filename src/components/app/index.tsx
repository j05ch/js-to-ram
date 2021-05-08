import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JsContainer from '../java-script/js-container';
import MachineAppContainer from '../random-access-machine/machine-app-container';
import MachineSelector from '../machine-selector';
import LanguageContextProvider from '../../context/LanguageContextProvider';
import LocaleSwitcher from '../locale-switcher';

const App: React.FC = () => {
	return (
		<LanguageContextProvider>
			<div className="absolute top-0 left-0">
				<LocaleSwitcher />
			</div>
			<Router>
				<Switch>
					<Route exact path={'/'}>
						<MachineSelector />
					</Route>
					<Route path={'/ram'}>
						<MachineAppContainer />
					</Route>
					<Route path={'/js'}>
						<JsContainer />
					</Route>
				</Switch>
			</Router>
		</LanguageContextProvider>
	);
};

export default App;
