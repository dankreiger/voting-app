import questionsReducer, {
  questionsReducerInitialState
} from 'reducers/questionsReducer';

import {
  fetchQuestionsBegin,
  fetchQuestionsSuccess,
  fetchQuestionsFailure
} from 'actions/index';

import { dummyQuestions } from 'utils/test-services/dummyQuestions';

describe('questionsReducer', () => {
  let initialState;
  let newState;

  beforeEach(() => {
    initialState = questionsReducerInitialState;
  });

  describe('actions of type FETCH_PERFUMES_BEGIN', () => {
    it('returns loading as true without mutating the original state', () => {
      newState = questionsReducer(initialState, fetchQuestionsBegin());
      expect(initialState).not.toEqual(newState);

      expect(newState).toEqual({
        ...initialState,
        loading: true
      });
    });
    it('resets get request errors if they currently exist', () => {
      initialState = { ...initialState, error: 'NETWORK ERROR' };
      newState = questionsReducer(initialState, fetchQuestionsBegin());
      expect(initialState).not.toEqual(newState);

      expect(newState).toEqual({
        ...initialState,
        loading: true,
        error: null
      });
    });
  });
  describe('actions of type FETCH_PERFUMES_SUCCESS', () => {
    it('returns loading as false and an array of questions without mutating the original state', () => {
      newState = questionsReducer(
        initialState,
        fetchQuestionsSuccess(dummyQuestions)
      );
      expect(initialState).not.toEqual(newState);
      expect(newState).toEqual({
        ...initialState,
        loading: false,
        questions: dummyQuestions
      });
    });
  });

  describe('actions of type FETCH_PERFUMES_FAILURE', () => {
    it('returns an error message without mutating the original state', () => {
      newState = questionsReducer(
        initialState,
        fetchQuestionsFailure('This is an error message')
      );
      expect(initialState).not.toEqual(newState);
      expect(newState).toEqual({
        ...initialState,
        error: 'This is an error message'
      });
    });
  });
});
