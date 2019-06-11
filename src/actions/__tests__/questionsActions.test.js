import moxios from 'moxios';
import { dummyQuestions } from 'utils/test-services/dummyQuestions';
import {
  cacheCurrentQuestion,
  fetchQuestions,
  fetchQuestionsBegin,
  fetchQuestionsSuccess,
  fetchQuestionsFailure
} from '../questionsActions';
import {
  CACHE_CURRENT_QUESTION,
  FETCH_QUESTIONS_BEGIN,
  FETCH_QUESTIONS_FAILURE,
  FETCH_QUESTIONS_SUCCESS
} from 'constants/index';

describe('cacheCurrentQuestion', () => {
  const action = cacheCurrentQuestion(dummyQuestions[0]);

  it('has the correct type', () => {
    expect(action.type).toEqual(CACHE_CURRENT_QUESTION);
  });

  it('has the correct payload', () => {
    expect(action.payload).toEqual({ currentQuestion: dummyQuestions[0] });
  });
});

describe('fetchQuestionsBegin', () => {
  const action = fetchQuestionsBegin();

  it('has the correct type', () => {
    expect(action.type).toEqual(FETCH_QUESTIONS_BEGIN);
  });
});

describe('fetchQuestionsSuccess', () => {
  const action = fetchQuestionsSuccess();

  it('has the correct type', () => {
    expect(action.type).toEqual(FETCH_QUESTIONS_SUCCESS);
  });
});

describe('fetchQuestionsFailure', () => {
  const action = fetchQuestionsFailure();

  it('has the correct type', () => {
    expect(action.type).toEqual(FETCH_QUESTIONS_FAILURE);
  });
});

describe('fetchQuestions', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('succeeds', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: dummyQuestions
      });
    });

    const store = global.mockStore(global.defaultTestReducers);

    return store.dispatch(fetchQuestions()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual([
        { type: FETCH_QUESTIONS_BEGIN },
        {
          type: FETCH_QUESTIONS_SUCCESS,
          payload: { questions: dummyQuestions }
        }
      ]);
    });
  });

  it('fails 500', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500
      });
    });

    const store = global.mockStore(global.defaultTestReducers);

    return store.dispatch(fetchQuestions()).then(() => {
      // return of async actions
      expect(store.getActions()[0]).toEqual({ type: FETCH_QUESTIONS_BEGIN });
      expect(store.getActions()[1].type).toEqual(FETCH_QUESTIONS_FAILURE);
    });
  });
});
