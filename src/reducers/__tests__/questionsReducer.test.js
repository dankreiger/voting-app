import questionsReducer, {
  questionsReducerInitialState
} from 'reducers/questionsReducer';

import {
  fetchQuestionsBegin,
  fetchQuestionsSuccess,
  fetchQuestionsFailure,
  updateQuestionDictionary,
  updateVoteInQuestionDictionary
} from 'actions/index';

import {
  dummyQuestions,
  dummyQuestionDictionary
} from 'utils/test-services/dummyQuestions';

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
        questions: dummyQuestions,
        questionDictionary: dummyQuestionDictionary
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

  describe('actions of type UPDATE_QUESTION_DICTIONARY', () => {
    it("given a new question, it updates the question dictionary using the question's url as the dictionary key without mutating the original state", () => {
      newState = questionsReducer(
        initialState,
        updateQuestionDictionary(dummyQuestions[0])
      );
      expect(initialState).not.toEqual(newState);
      let newQuestionDictionary = {};
      newQuestionDictionary[dummyQuestions[0].url] = dummyQuestions[0];

      expect(Object.keys(newQuestionDictionary).length).toBe(1);
      expect(newState).toEqual({
        ...initialState,
        questionDictionary: newQuestionDictionary
      });

      /* add another entry */
      let newState2 = questionsReducer(
        newState,
        updateQuestionDictionary(dummyQuestions[1])
      );
      expect(newState2).not.toEqual(newState);

      newQuestionDictionary[dummyQuestions[1].url] = dummyQuestions[1];

      expect(Object.keys(newQuestionDictionary).length).toBe(2);
      expect(newState2).toEqual({
        ...newState,
        questionDictionary: newQuestionDictionary
      });
    });
  });

  describe('actions of type UPDATE_VOTE_IN_QUESTION_DICTIONARY', () => {
    it('updates the vote count in an existing question dictionary without mutating the original state', () => {
      const questionId = '5';
      const testChoiceItem = {
        choice: 'Wii U',
        url: '/questions/5/choices/44',
        votes: 232
      };
      let initialStateWithDictionary = {
        ...initialState,
        questionDictionary: {
          '/questions/5': {
            choices: [
              {
                choice: 'Wii U',
                url: '/questions/5/choices/44',
                votes: 231
              },
              {
                choice: 'PlayStation 4',
                url: '/questions/5/choices/43',
                votes: 227
              },
              {
                choice: 'Xbox One',
                url: '/questions/5/choices/45',
                votes: 176
              }
            ],
            published_at: '2015-05-27T21:22:26.557000+00:00',
            question: 'Console of choice?',
            url: '/questions/5'
          }
        }
      };

      newState = questionsReducer(
        initialStateWithDictionary,
        updateVoteInQuestionDictionary(questionId, testChoiceItem)
      );
      const deepCloneState = JSON.parse(
        JSON.stringify(initialStateWithDictionary)
      );
      // update vote in state copy
      deepCloneState.questionDictionary[
        `/questions/${questionId}`
      ].choices.forEach(choice => {
        if (choice.url === testChoiceItem.choice.url) {
          choice.votes = testChoiceItem.choice;
        }
      });
      expect(initialStateWithDictionary).not.toEqual(newState);
      expect(newState).toEqual({
        ...initialState,
        questionDictionary: newState.questionDictionary
      });
    });
  });
});
