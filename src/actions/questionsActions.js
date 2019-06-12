import axios from 'axios';
import {
  FETCH_QUESTIONS_BEGIN,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
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

export const updateQuestionDictionary = (questionId, choiceItem) => ({
  type: UPDATE_QUESTION_DICTIONARY,
  payload: {
    questionId,
    choiceItem
  }
});
