// authActions.js
export const registerSuccess = (userData) => ({
    type: 'REGISTER_SUCCESS',
    payload: userData,
});

export const loginSuccess = (userData) => ({
    type: 'LOGIN_SUCCESS',
    payload: userData,
});

export const logoutSuccess = () => ({
    type: 'LOGOUT_SUCCESS',
});
