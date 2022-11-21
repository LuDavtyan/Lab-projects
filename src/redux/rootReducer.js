import { combineReducers } from 'redux';
import { settingsReducer } from './settingsReducer';
import { limitsReducer } from './limitsReducer'
import { timeReducer } from './timeReducer';

export const rootReducer = combineReducers({
    settingsReducer,
    limitsReducer,
    timeReducer,
})

