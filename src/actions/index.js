import * as questionsActions from './questionsActions';
import * as votesActions from './votesActions';

export const {
  fetchQuestions,
  fetchQuestionsBegin,
  fetchQuestionsSuccess,
  fetchQuestionsFailure,
  updateVoteInQuestionDictionary,
  updateQuestionDictionary
} = questionsActions;

export const {
  registerVote,
  postVote,
  postVoteBegin,
  postVoteSuccess,
  postVoteFailure
} = votesActions;
