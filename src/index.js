import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GitHubState from './components/context/Github/githubState';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlertState from './components/context/Alert/alertState';
ReactDOM.render(
	<BrowserRouter>
		<GitHubState>
			<AlertState>
				<App />
			</AlertState>
		</GitHubState>
	</BrowserRouter>,
	document.getElementById('root')
);
