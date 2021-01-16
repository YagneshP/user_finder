import { SET_ALERT, REMOVE_ALERT } from '../actionTypes/actiotnTypes';
const alertReducer = (state, action) => {
	switch (action.type) {
		case SET_ALERT:
			return {
				...state,
				alert: 'Please enter user ! Do not leave it empty'
			};
		case REMOVE_ALERT:
			return {
				...state,
				alert: null
			};
		default:
			throw new Error("Shouldn't reach to this point");
	}
};

export default alertReducer;
