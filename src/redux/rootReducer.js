import { combineReducers } from 'redux';
import { settingsReducer } from './settingsReducer';
import { limitsReducer } from './limitsReducer'
import { timeReducer } from './timeReducer';
import { minuteReducer } from './minuteReducer';

export const rootReducer = combineReducers({
    settingsReducer,
    limitsReducer,
    timeReducer,
    minuteReducer,
})

