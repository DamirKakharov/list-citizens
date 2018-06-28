import { combineReducers } from 'redux';
import usersReducers from './users';
import docsReducers from './docs';
import filterReduser from './filters';

const rootReducer = combineReducers({
    users: usersReducers,
    docs: docsReducers,
    filters: filterReduser,
});

export default rootReducer;
