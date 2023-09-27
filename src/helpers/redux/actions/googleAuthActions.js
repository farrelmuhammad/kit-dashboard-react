// googleAuthActions.js
export const googleSignInSuccess = (user) => ({
    type: 'GOOGLE_SIGN_IN_SUCCESS',
    payload: user,
});

export const googleSignInFailure = (error) => ({
    type: 'GOOGLE_SIGN_IN_FAILURE',
    payload: error,
});
