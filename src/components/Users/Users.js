import React, { useContext } from 'react';
import { GithubContext } from '../context/Github/githubContext';
import classes from './Users.module.css';
import User from './User/User';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/Container';
import Loader from '../Loader/Loader';
const Users = () => {
	const githubContext = useContext(GithubContext);
	const { users, loading, setUser } = githubContext;
	let userProfiles = null;
	if (loading) {
		return (<Container style={{textAlign:"center"}}><Loader/></Container>);
	} else {
		userProfiles = users.map((user) => <User key={user.id} user={user} setUser={setUser} />);
	}

	return (
		<Container>
			{users.length > 0 ? (
				<Button className={classes.clearButton} onClick={() => githubContext.clearUsers()}>
					Clear Users
				</Button>
			) : null}

			<div className={classes.main}>{userProfiles}</div>
		</Container>
	);
};

export default Users;
