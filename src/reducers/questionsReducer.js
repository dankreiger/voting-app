import {
  FETCH_QUESTIONS_BEGIN,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  UPDATE_VOTE_IN_QUESTION_DICTIONARY,
  UPDATE_QUESTION_DICTIONARY
} from 'constants/index';

/* QuestionDictionary.proptypes.js */
/**
 * @typedef QuestionDictionary
 * @type {Object}
 * @property {<string, Question>}
 */

/* Choice.proptypes.js */
/**
 * @typedef Question
 * @type {Object}
 * @property {string} url
 * @property {string} votes
 * @property {string} choice
 */

/* Question.proptypes.js */
/**
 * @typedef Question
 * @type {Object}
 * @property {string} url
 * @property {string} published_at
 * @property {string} question
 * @property {Choice[]} choices
 */

/**
 * @typedef questionsPayload
 * @type {Object}
 * @property {Question[]} questions
 * @property {Error|null} error
 * @description questionsReducer payload
 */

/**
 * @typedef questionsAction
 * @type {Object}
 * @property {string} type
 * @property {questionsPayload} payload
 * @description questionsReducer action
 */

/**
 * @typedef questionsState
 * @type {Object}
 * @property {Question[]} questions
 * @property {bool} loading
 * @property {Error|null} error
 * @property {QuestionDictionary} questionDictionary
 * @description questionsReducer state
 */
export const questionsReducerInitialState = {
  questions: [],
  loading: false,
  error: null
};

/**
 * @function questionsReducer
 * @type {React.Reducer<questionsState, questionsAction>}
 * @param {questionsState} state
 * @param {questionsAction} action
 */
const questionsReducer = (state = questionsReducerInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_QUESTIONS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_QUESTIONS_SUCCESS:
      const questionDictionary = { ...state.questionDictionary };
      if (Object.keys(questionDictionary).length === 0) {
        payload.questions.forEach(question => {
          questionDictionary[question.url] = question;
        });
      }
      return {
        ...state,
        loading: false,
        questions: payload.questions,
        questionDictionary
      };
    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
        questions: []
      };
    case UPDATE_QUESTION_DICTIONARY:
      const deepStateClone = JSON.parse(JSON.stringify(state));
      const newQuestionDictionary = { ...deepStateClone.questionDictionary };
      const dictKey = payload.question.url;
      newQuestionDictionary[dictKey] = payload.question;
      return {
        ...state,
        questionDictionary: newQuestionDictionary
      };
    case UPDATE_VOTE_IN_QUESTION_DICTIONARY:
      const deepStateClone1 = JSON.parse(JSON.stringify(state));
      const questionDictionaryWithNewVote = {
        ...deepStateClone1.questionDictionary
      };
      const dictKey1 = `/questions/${payload.questionId}`;
      const { votes, url } = payload.choiceItem;
      /* update vote count on small array of choices in dictionary */
      questionDictionaryWithNewVote[dictKey1].choices.forEach(c => {
        if (c.url === url) {
          c.votes = votes;
        }
      });
      return {
        ...state,
        questionDictionary: questionDictionaryWithNewVote
      };
    default:
      return state;
  }
};

export default questionsReducer;
