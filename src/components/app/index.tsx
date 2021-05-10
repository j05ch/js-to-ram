import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import JsContainer from '../java-script/js-container';
import MachineAppContainer from '../random-access-machine/machine-app-container';
import MachineSelector from '../machine-selector';
import LanguageContextProvider from '../../context/LanguageContextProvider';
import LocaleSwitcher from '../common/locale-switcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const App: React.FC = () => {
	return (
		<LanguageContextProvider>
			<div className="flex justify-center">
				<div className="min-w-800 max-w-1200 pt-4 relative">
					<Router>
						<div className="absolute top-0 left-0 flex">
							<LocaleSwitcher />
							<div className="p-2">
								<Link to="/">
									<FontAwesomeIcon icon={faHome} />
								</Link>
							</div>
						</div>
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
				</div>
			</div>
		</LanguageContextProvider>
	);
};

export default App;
