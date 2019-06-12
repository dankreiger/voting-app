import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import votesReducer from './votesReducer';

export default combineReducers({
  questionsReducer,
  votesReducer
});
