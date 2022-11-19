import { combineReducers } from 'redux';
import { settingsReducer } from './settingsReducer';
import { limitsReducer } from './limitsReducer'


export const rootReducer = combineReducers({
    settingsReducer,
    limitsReducer
})

