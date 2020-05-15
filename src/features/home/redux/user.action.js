
const login = (username, password) => {
	return (dispatch) => {
		// dispatch(request({ username }));
		// userService.login(username, password)
		//     .then(
		//         user => {
		//             dispatch(success(user));
		//             history.push('/');
		//         },
		//         error => {
		//             dispatch(failure(error.toString()));
		//             dispatch(alertActions.error(error.toString()));
		//         }
		//     );
	};

	// function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
	// function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
	// function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
};

const logout = (username, password) => {
	return (dispatch) => {
		// dispatch(request({ username }));
		// userService.login(username, password)
		//     .then(
		//         user => {
		//             dispatch(success(user));
		//             history.push('/');
		//         },
		//         error => {
		//             dispatch(failure(error.toString()));
		//             dispatch(alertActions.error(error.toString()));
		//         }
		//     );
	};

	// function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
	// function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
	// function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
};

const register = (username, password) => {
	return (dispatch) => {
		// dispatch(request({ username }));
		// userService.login(username, password)
		//     .then(
		//         user => {
		//             dispatch(success(user));
		//             history.push('/');
		//         },
		//         error => {
		//             dispatch(failure(error.toString()));
		//             dispatch(alertActions.error(error.toString()));
		//         }
		//     );
	};

	// function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
	// function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
	// function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
};

export const userActions = {
	  login
	, logout
	, register
};