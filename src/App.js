import React, { useContext } from 'react';
import NavbarMenu from './components/NavbarMenu/NavbarMenu';
import Users from './components/Users/Users';
import Profile from './components/Profile/Profile';
import { Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import { AlertContext } from './components/context/Alert/alertContext';
import Alert from './components/Alert/Alert';
import NotFound from './components/NotFound/NotFound';


function App() {
	const alertContext = useContext(AlertContext);
	
	return (
		<div>
			<Route path="/">
				{' '}
				<NavbarMenu />{' '}
			</Route>
			{alertContext.alert === null ? (
				<Switch>
					<Route exact path="/">
						<Users />
					</Route>
					<Route exact path="/users/:login">
						<Profile />
					</Route>
					<Route exact path="/about">
						{' '}
						<About />
					</Route>
					<Route component={NotFound}></Route>
				</Switch>
			) : (
				<Alert />
			)}
		</div>
	);
}

export default App;
