import { registerVote } from 'actions';
import { REGISTER_VOTE } from 'constants/index';
import { dummyChoiceItem } from 'utils/test-services/dummyChoiceItems';

describe('registerVote', () => {
  let questionId = '9';
  const action = registerVote(questionId, dummyChoiceItem);

  it('has the correct type', () => {
    expect(action.type).toEqual(REGISTER_VOTE);
  });

  it('has the correct payload', () => {
    expect(action.payload).toEqual({
      choiceItem: dummyChoiceItem,
      questionId: '9'
    });
  });
});
