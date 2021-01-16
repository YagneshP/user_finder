import { GET_USERS, SET_USER, SET_LOADING, SET_ERROR, CLEAR_USERS, GET_REPOS } from '../actionTypes/actiotnTypes';
import { GithubContext } from './githubContext';
import githubReducer from './githubReducer';
import React, { useReducer } from 'react';
import axios from 'axios';

const intialState = {
	users: [],
	user: null,
	loading: false,
	repos:null,
	error: null
};
let githubClientId;
let githubClientSecret;
if(process.env.NODE_ENV !== "production"){
	githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
	githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else{
	githubClientId = process.env.GITHUB_CLIENT_ID;
	githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

export default (props) => {
	const [ state, dispatch ] = useReducer(githubReducer, intialState);

	const getUsers = (text) => {
		dispatch({ type: SET_LOADING });
		axios
			.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_SECRET=${githubClientSecret}`)
			.then((res) => {
		
				dispatch({
					type: GET_USERS,
					payload: res.data.items
				});
			})
			.catch((res) => {
				dispatch({
					type: SET_ERROR,
					payload: res.statusText
				});
			});
	};

	const getRepos = (login) =>{
		axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_SECRET=${githubClientSecret}`)
		.then((res)=>{
		
			dispatch({
				type:GET_REPOS,
				payload:res.data
			})
		})
		.catch((res) => {
			dispatch({
				type: SET_ERROR,
				payload: res.statusText
			});
		});
	}

	const setUser = (login) => {
		

		dispatch({ type: SET_LOADING });
		axios
			.get(`https://api.github.com/users/${login}?client_id=${githubClientId}&client_SECRET=${githubClientSecret}`)
			.then((res) => {
			
				dispatch({
					type: SET_USER,
					payload: res.data
				});
			})
			.then(getRepos(login))
			.catch((res) => {
				dispatch({
					type: SET_ERROR,
					payload: res.statusText
				});
			});
	};

	const clearUsers = () => {
		dispatch({
			type: CLEAR_USERS
		});
	};

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				loading: state.loading,
				error: state.error,
				getUsers: getUsers,
				setUser: setUser,
				repos:state.repos,
				clearUsers: clearUsers
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};
