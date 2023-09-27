// store.js
import { createStore, combineReducers } from 'redux';
import authReducer from '../reducer/authReducer';
import googleAuthReducer from '../reducer/googleAuthReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    googleAuth: googleAuthReducer
});

const store = createStore(rootReducer);

export default store;
