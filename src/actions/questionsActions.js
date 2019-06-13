import axios from 'axios';
import {
  FETCH_QUESTIONS_BEGIN,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  UPDATE_VOTE_IN_QUESTION_DICTIONARY,
  UPDATE_QUESTION_DICTIONARY
} from 'constants/index';
import { apiQuestionsBase } from 'utils/http/api';

export function fetchQuestions() {
  return async dispatch => {
    dispatch(fetchQuestionsBegin());
    try {
      const response = await axios.get(apiQuestionsBase);
      const data = await response.data;
      return dispatch(fetchQuestionsSuccess(data));
    } catch (err) {
      return dispatch(fetchQuestionsFailure(err));
    }
  };
}

export const fetchQuestionsBegin = () => ({
  type: FETCH_QUESTIONS_BEGIN
});

export const fetchQuestionsSuccess = questions => ({
  type: FETCH_QUESTIONS_SUCCESS,
  payload: {
    questions
  }
});

export const fetchQuestionsFailure = error => ({
  type: FETCH_QUESTIONS_FAILURE,
  payload: {
    error
  }
});

/**
 * @description updates question dictionary after user submits vote
 * @param {string} questionId
 * @param {Choice} choiceItem
 */
export const updateVoteInQuestionDictionary = (questionId, choiceItem) => ({
  type: UPDATE_VOTE_IN_QUESTION_DICTIONARY,
  payload: {
    questionId,
    choiceItem
  }
});

export const updateQuestionDictionary = question => ({
  type: UPDATE_QUESTION_DICTIONARY,
  payload: {
    question
  }
});
