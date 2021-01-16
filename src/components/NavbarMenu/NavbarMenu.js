import React, {  useContext, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import classes from './NavabarMenu.module.css';
import { GithubContext } from '../context/Github/githubContext';

import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { AlertContext } from '../context/Alert/alertContext';

const NavbarMenu = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	// const inputRef = useRef('');
	const [ text, setText ] = useState('');

	const handleRef = () => {
		if (text !== '') {
			githubContext.getUsers(text);
			setText('');
		} else {
			alertContext.setAlert();
			githubContext.clearUsers();
		}
	};

	return (
		<Navbar variant="dark" expand="lg" className={classes.Navbar}>
			<Container>
				<Link to="/">
					<Navbar.Brand>User Finder</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Form inline className={classes.Form}>
						<FormControl
							type="text"
							placeholder="Search Github Users"
							className={`${classes.FormInput} mr-sm-2`}
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
						<Link to="/">
							<Button variant="secondary" onClick={handleRef} className={classes.FormButton}>
								Search
							</Button>
						</Link>
					</Form>
					<Nav className="ml-auto">
					
					<Nav.Link as={Link} to="/">	Home
						</Nav.Link>
					
							{' '}
							<Nav.Link  as={Link} to="/about">	about </Nav.Link>
					
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarMenu;
