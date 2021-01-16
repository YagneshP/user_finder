import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Profile.module.css';
import Button from 'react-bootstrap/esm/Button';
import { GithubContext } from '../context/Github/githubContext';
import {Link, Redirect} from "react-router-dom"

import Repos from "./Repos/Repos";
import Loader from '../Loader/Loader';
const Profile = () => {
	const githubContext = useContext(GithubContext);
	if (githubContext.user) {
		const { avatar_url, name, location, bio, login, company, blog, html_url, hireable, followers, following,public_gists,public_repos } = githubContext.user;
		return (
			<Container >
				<Row style={{marginTop:"10px"}}>
					<Col>
				<Button variant="dark">	<Link to="/" style={{color: "#fff"}}>Back To Search</Link> </Button>
					</Col>
				</Row>
				<Row className={`${classes.Profile} ${classes.Profile_row}`}>
					<Col style={{ margin: '10px auto' }} className={classes.Profile_column}>
						<img className={classes.Profile_image} src={avatar_url} alt={name} />
						<h4>{name}</h4>
					{location ? (	<h6>Location :{location}</h6>) : null}
						<p>
							Hireable
							{hireable ? (
								<i className="fas fa-check-square" style={{ color: 'green', marginLeft:"5px" }} />
							) : (
								<i className="fas fa-times-circle" style={{ color: 'red', marginLeft:"5px"  }} />
							)}
						</p>
					</Col>
					<Col className={classes.Profile_column}>
						{bio ? (
							<div>
								<h3>Bio</h3>
								<p>{bio}</p>
							</div>
						) : null}

						<a href={html_url} >
							<Button>Visit Github Profile</Button>
						</a>
							<div style={{marginTop:"10px"}}>
						<p ><strong>UserName:</strong> {login}</p>

						{company ? <p><strong>Company:</strong> {company}</p> : null}
						{blog ? <p><strong>Website:</strong> {blog}</p> : null}
						</div>
					</Col>
				</Row>
				<Row className={classes.Profile_row}>
					{followers ? 	<Col><Button className={classes.Profile_column2_button}  variant="success">Follwers: {followers}</Button> </Col>: null}
						{following ?<Col> <Button className={classes.Profile_column2_button} variant="warning">Follwing: {following}</Button></Col> : null}
						{public_gists ? <Col><Button className={classes.Profile_column2_button} variant="info">public_gists: {public_gists}</Button> </Col>: null}
						{public_repos? <Col><Button className={classes.Profile_column2_button} variant="danger">public_repos: {public_repos}</Button> </Col> : null}
				</Row>
		
				<Repos/>
			
			</Container>
		);
	} else if(githubContext.loading === true && githubContext.user === null){
	return (<Container style={{textAlign:"center"}}><Loader/></Container>)
	}else{
	return 	<Redirect to="/"></Redirect>
	};
};

export default Profile;
