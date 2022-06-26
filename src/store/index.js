import {applyMiddleware, createStore} from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { authReducer } from './reducers/authReducer';
import { currentUserReducer } from './reducers/currentUserReducer';
import { usersReducer } from './reducers/usersReducer';
const rootReducer = combineReducers({
    Auth: authReducer,
    users: usersReducer,
    currentUser: currentUserReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))