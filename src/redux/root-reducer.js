import { combineReducers } from 'redux';

import application from './application/application.reducer';

const rootReducer = combineReducers({
    application: application
});

export default rootReducer;