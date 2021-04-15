import { combineReducers } from 'redux';
import register from './RegisterRedux/reducer';
const rootReducer = combineReducers({
    register,
});
export default rootReducer;
