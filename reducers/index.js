import { combineReducers } from 'redux';
import githubReducer from './github_reducer';

export default combineReducers({
  github: githubReducer,
});
