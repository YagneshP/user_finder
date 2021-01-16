import { GET_USERS, SET_USER, SET_LOADING, SET_ERROR, CLEAR_USERS, GET_REPOS } from '../actionTypes/actiotnTypes';

const githubReducer = (state, action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				users: action.payload,
				loading: false
			};
		case SET_USER:
			return {
				...state,
				user: action.payload,
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_REPOS:
			return{
				...state,
				repos: action.payload
			}
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};
		case CLEAR_USERS:
			return {
				...state,
				users: []
			};

		default:
			throw new Error('Something went wrong');
	}
};

export default githubReducer;
