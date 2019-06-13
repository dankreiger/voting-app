import moxios from 'moxios';
import { dummyQuestions } from 'utils/test-services/dummyQuestions';
import { dummyChoiceItem } from 'utils/test-services/dummyChoiceItems';
import {
  fetchQuestions,
  fetchQuestionsBegin,
  fetchQuestionsSuccess,
  fetchQuestionsFailure,
  updateQuestionDictionary,
  updateVoteInQuestionDictionary
} from '../questionsActions';
import {
  FETCH_QUESTIONS_BEGIN,
  FETCH_QUESTIONS_FAILURE,
  FETCH_QUESTIONS_SUCCESS,
  UPDATE_QUESTION_DICTIONARY,
  UPDATE_VOTE_IN_QUESTION_DICTIONARY
} from 'constants/index';

describe('updateQuestionDictionary', () => {
  const action = updateQuestionDictionary(dummyQuestions[0]);

  it('has the correct type', () => {
    expect(action.type).toEqual(UPDATE_QUESTION_DICTIONARY);
  });

  it('has the correct payload', () => {
    expect(action.payload).toEqual({ question: dummyQuestions[0] });
  });
});

describe('updateVoteInQuestionDictionary', () => {
  const questionId = '6';
  const choiceItem = dummyChoiceItem;
  const action = updateVoteInQuestionDictionary(questionId, dummyChoiceItem);

  it('has the correct type', () => {
    expect(action.type).toEqual(UPDATE_VOTE_IN_QUESTION_DICTIONARY);
  });

  it('has the correct payload', () => {
    expect(action.payload).toEqual({ questionId, choiceItem });
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
