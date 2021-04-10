import * as React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useHistory,
} from 'react-router-dom';
import JsContainer from '../java-script/js-container';
import MachineAppContainer from '../random-access-machine/machine-app-container';
import Button from '../common/Button';
import MachineSelector from '../machine-selector';

const App: React.FC = () => {
	return (
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
	);
};

export default App;
