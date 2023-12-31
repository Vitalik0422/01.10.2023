import { combineReducers } from 'redux'

import authReducer from './auth';

export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        auth: authReducer,
        ...injectedReducers,
    });

    return rootReducer
}