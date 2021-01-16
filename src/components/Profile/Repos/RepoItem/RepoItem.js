import React, { useContext,Fragment } from 'react'
import { GithubContext } from '../../../context/Github/githubContext'
import {Col} from "react-bootstrap";
import classes from "./RepoItem.module.css";

const RepoItem = () => {
	const githubContext = useContext(GithubContext);


		const repoItems = githubContext.repos ?
			(<Fragment>
			{	githubContext.repos.map(repo=> 
				<Col className= {classes.RepoItem_col} key={repo.id}><a className={classes.RepoItem_a}href={repo.html_url}>{repo.name}</a></Col>
			)}
				</Fragment> ): null		
				 
			return repoItems
						
	
}

export default RepoItem
