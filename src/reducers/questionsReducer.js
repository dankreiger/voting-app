import {
  CACHE_CURRENT_QUESTION,
  FETCH_QUESTIONS_BEGIN,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE
} from 'constants/index';

/* Choice.proptypes.js */
/**
 * @typedef Question
 * @type {object}
 * @property {string} url
 * @property {string} votes
 * @property {string} choice
 */

/* Question.proptypes.js */
/**
 * @typedef Question
 * @type {object}
 * @property {string} url
 * @property {string} published_at
 * @property {string} question
 * @property {Choice[]} choices
 * @property {Object} cachedQuestions
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
  error: null,
  cachedQuestions: {}
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
      return {
        ...state,
        loading: false,
        questions: payload.questions
      };
    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
        questions: []
      };
    case CACHE_CURRENT_QUESTION:
      const url = payload.currentQuestion && payload.currentQuestion.url;
      if (url) {
        return {
          ...state,
          cachedQuestions: {
            ...state.cachedQuestions,
            [url]: payload.currentQuestion
          }
        };
      } else {
        return {
          ...state
        };
      }
    default:
      return state;
  }
};

export default questionsReducer;
