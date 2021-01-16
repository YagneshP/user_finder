import React from 'react';

export const GithubContext = React.createContext({
	users: [],
	user: {},
	loading: false,
	error: null,
	repos:[],
	getUsers: () => {}
});
