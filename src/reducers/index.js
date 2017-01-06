import { combineReducers } from 'redux';
import styleReducer from './style_reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  style:styleReducer,
  form:formReducer
});

export default rootReducer;
