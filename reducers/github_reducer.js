import { GITHUB_FETCH_SUCCESS, GITHUB_CLEAR_USER } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GITHUB_FETCH_SUCCESS:
      return action.payload;
    case GITHUB_CLEAR_USER:
      return {};
    default:
      return state;
  }
};
