// googleAuthReducer.js
const initialState = {
    user: null,
    error: null,
};

const googleAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GOOGLE_SIGN_IN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                error: null,
            };
        case 'GOOGLE_SIGN_IN_FAILURE':
            return {
                ...state,
                user: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default googleAuthReducer;
