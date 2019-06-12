import votesReducer, { votesReducerInitialState } from 'reducers/votesReducer';
import { registerVote } from 'actions/index';
import {
  dummyChoiceItem,
  dummyChoiceItem2
} from 'utils/test-services/dummyChoiceItems';

describe('votesReducer', () => {
  let initialState;
  let newState;
  let newState2;

  beforeEach(() => {
    initialState = votesReducerInitialState;
  });

  describe('actions of type REGISTER_VOTE', () => {
    it('returns a dictionary with the question number as key and the corresponding user vote as value without mutating the original state', () => {
      const questionId = '9';
      newState = votesReducer(
        initialState,
        registerVote(questionId, dummyChoiceItem)
      );
      expect(initialState).not.toEqual(newState);

      expect(newState).toEqual({
        ...initialState,
        registeredVoteDictionary: {
          '9': {
            choiceItem: {
              choice: 'Shooter',
              url: '/questions/10/choices/70',
              votes: 1382
            }
          }
        }
      });
    });

    it('can add multiple items to the dictionary without mutating the original state', () => {
      const questionId = '9';
      const questionId2 = '7';

      newState = votesReducer(
        initialState,
        registerVote(questionId, dummyChoiceItem)
      );
      expect(initialState).not.toEqual(newState);

      expect(newState).toEqual({
        ...initialState,
        registeredVoteDictionary: { '9': dummyChoiceItem }
      });

      newState2 = votesReducer(
        newState,
        registerVote(questionId2, dummyChoiceItem2)
      );

      expect(newState).not.toEqual(newState2);

      expect(newState2).toEqual({
        ...initialState,
        registeredVoteDictionary: {
          '9': dummyChoiceItem,
          '7': dummyChoiceItem2
        }
      });
    });
  });
});
