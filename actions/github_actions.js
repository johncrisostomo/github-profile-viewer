import axios from 'axios';
import {
  GITHUB_FETCH_SUCCESS,
  GITHUB_FETCH_FAIL,
  GITHUB_FETCH_NO_USER,
  GITHUB_CLEAR_USER,
} from './types';

export const clearUser = () => {
  return { type: GITHUB_CLEAR_USER };
};

export const findUser = username => async dispatch => {
  try {
    let { data } = await axios.get(`https://api.github.com/users/${username}`);
    if (data.login === username) {
      let followersResponse = await axios.get(data.followers_url);
      data.followers = followersResponse.data;
      dispatch({
        type: GITHUB_FETCH_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: GITHUB_FETCH_NO_USER,
      });
    }
  } catch (e) {
    dispatch({
      type: GITHUB_FETCH_FAIL,
    });
  }
};
