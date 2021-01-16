import React from 'react';
import classes from './User.module.css';
import { Link } from 'react-router-dom';

const User = (props) => {
	const { login, avatar_url, url } = props.user;
	return (
		<div className={classes.container_user}>
			<Link
				to={`/users/${login}`}
				className={classes.follow}
				align="center"
				href={url}
				onClick={() => props.setUser(login)}
			>
				More
			</Link>
			<img className={classes.profile_img} alt="profile" src={avatar_url} />
			<img
				className={classes.background_img}
				alt="background"
				src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
			/>
			<p className={classes.name}>
				{/* <img
					className={classes.icon}
					alt="twitch-icon"
					src="https://cdn1.iconfinder.com/data/icons/micon-social-pack/512/twitch-512.png"
				/> */}
				<i className="fab fa-github" /> {login}
			</p>
		</div>
	);
};

export default User;
