import axios from 'axios';
import {
  REGISTER_VOTE,
  POST_VOTE_BEGIN,
  POST_VOTE_SUCCESS,
  POST_VOTE_FAILURE
} from 'constants/index';

import { createVotingPostUrl } from 'utils/http/api';

export const registerVote = (questionId, choiceItem) => ({
  type: REGISTER_VOTE,
  payload: { questionId, choiceItem }
});

/**
 *
 * @param {string} questionId
 * @param {string} choiceId
 */
export function postVote(questionId, choiceId) {
  return async dispatch => {
    dispatch(postVoteBegin(choiceId));
    const postUrl = createVotingPostUrl(questionId, choiceId);
    try {
      const res = await axios.post(postUrl);
      const data = await res.data;
      dispatch(registerVote(questionId, data));
      return dispatch(postVoteSuccess(data));
    } catch (err) {
      return dispatch(postVoteFailure(err));
    }
  };
}

export const postVoteBegin = choiceId => ({
  type: POST_VOTE_BEGIN,
  payload: { choiceId }
});

export const postVoteSuccess = choiceItem => ({
  type: POST_VOTE_SUCCESS,
  payload: {
    choiceItem
  }
});

export const postVoteFailure = error => ({
  type: POST_VOTE_FAILURE,
  payload: {
    error
  }
});
