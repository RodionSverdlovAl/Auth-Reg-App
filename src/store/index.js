import {applyMiddleware, createStore} from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { authReducer } from './reducers/authReducer';
const rootReducer = combineReducers({
    Auth: authReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))