import React, { useReducer } from 'react';
import alertReducer from './alertReducer';
import { AlertContext } from './alertContext';
import { SET_ALERT, REMOVE_ALERT } from '../actionTypes/actiotnTypes';
const intialState = {
	alert: null
};

export default (props) => {
	const [ state, dispatch ] = useReducer(alertReducer, intialState);
	const setAlert = () => {
		dispatch({
			type: SET_ALERT
		});
		setTimeout(() => {
			dispatch({
				type: REMOVE_ALERT
			});
		}, 2000);
	};
	return (
		<AlertContext.Provider
			value={{
				alert: state.alert,
				setAlert: setAlert
			}}
		>
			{props.children}
		</AlertContext.Provider>
	);
};
