import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import AuthReducer from './AuthReducer';
import errorReducer from './errorReducer'
export default combineReducers({
    item: itemReducer,
    error : errorReducer,
    auth : AuthReducer
})