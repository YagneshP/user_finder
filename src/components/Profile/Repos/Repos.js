import React from 'react';
import { Row } from 'react-bootstrap';
import classes from "./Repos.module.css"
import RepoItem from './RepoItem/RepoItem';

const Repos = () => {
	
	return (
		<Row className={classes.Repos_Row}>
			<RepoItem/>
		</Row>
	)
}

export default Repos
