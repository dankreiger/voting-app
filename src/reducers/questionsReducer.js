import {
  FETCH_QUESTIONS_BEGIN,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE
} from 'constants/index';

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
      const questionDictionary = {};
      payload.questions.forEach(question => {
        questionDictionary[question.url] = question;
      });
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
    default:
      return state;
  }
};

export default questionsReducer;
