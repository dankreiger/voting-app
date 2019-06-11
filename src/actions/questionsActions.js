import axios from 'axios';

import {
  FETCH_QUESTIONS_BEGIN,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE
} from 'constants/index';

import { baseApiUrl } from 'utils/http/api';

async function develFetchQuestions(dispatch) {
  if (process.env.NODE_ENV !== 'test') {
    console.log('In Development Environment: Serving static data.');
  }
}

export function fetchQuestions() {
  return async dispatch => {
    dispatch(fetchQuestionsBegin());
    if (process.env.NODE_ENV !== 'test') {
      console.log('fetchUrl', baseApiUrl);
    }
    if (!baseApiUrl) {
      return develFetchQuestions(dispatch);
    } else {
      try {
        const { data } = await axios.get(baseApiUrl);
        return dispatch(fetchQuestionsSuccess(data));
      } catch (err) {
        if (process.env.NODE_ENV !== 'test') {
          console.error('Error: ', err);
        }
        return dispatch(fetchQuestionsFailure(err));
      }
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
