import {applyMiddleware, createStore} from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { authReducer } from './reducers/authReducer';
import { usersReducer } from './reducers/usersReducer';
const rootReducer = combineReducers({
    Auth: authReducer,
    users: usersReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))