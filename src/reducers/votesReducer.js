import {
  REGISTER_VOTE,
  POST_VOTE_SUCCESS,
  POST_VOTE_FAILURE,
  POST_VOTE_BEGIN
} from 'constants/index';

/* Choice.proptypes.js */
/**
 * @typedef Choice
 * @type {Object}
 * @property {string} url
 * @property {number} votes
 * @property {string} choice
 */

/* RegisteredVote.proptypes.js */
/**
 * @typedef RegisteredVote
 * @type {Object}
 * @property {string} questionId
 * @property {Choice} choiceItem
 */

/**
 * @typedef votesPayload
 * @type {Object}
 * @property {string} questionId
 * @property {Choice} choiceItem
 * @property {bool} postInProgress
 * @property {Error|null} error
 * @property {string} choicedIdPosting
 * @description votesReducer payload
 */

/**
 * @typedef votesAction
 * @type {Object}
 * @property {string} type
 * @property {{ questionId: string, choiceItem: Choice }} payload
 * @description votesReducer action
 */

/**
 * @typedef votesState
 * @type {Object}
 * @property {bool} postInProgress
 * @property {Error|null} error
 * @property {string} choicedIdPosting
 * @property {<string,RegisteredVote>|null} registeredVoteDictionary
 * @description votesReducer state
 */
export const votesReducerInitialState = {
  registeredVoteDictionary: null,
  postInProgress: false,
  choicedIdPosting: null,
  error: null
};

/**
 * @function votesReducer
 * @type {React.Reducer<votesState, votesAction>}
 * @param {votesState} state
 * @param {votesAction} action
 */
const votesReducer = (state = votesReducerInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_VOTE_BEGIN:
      return {
        ...state,
        choicedIdPosting: payload.choiceId,
        postInProgress: true,
        error: null
      };
    case POST_VOTE_SUCCESS:
      return {
        ...state,
        choicedIdPosting: null,
        postInProgress: false
      };
    case POST_VOTE_FAILURE:
      return {
        ...state,
        choicedIdPosting: null,
        postInProgress: false,
        error: payload.error
      };
    case REGISTER_VOTE:
      const registeredVoteDictionary = state.registeredVoteDictionary || {};
      const newRegisteredVoteDictionary = Object.assign(
        {},
        registeredVoteDictionary
      );
      newRegisteredVoteDictionary[payload.questionId] = payload.choiceItem;
      return {
        ...state,
        registeredVoteDictionary: {
          ...state.registeredVotesDictionary,
          ...newRegisteredVoteDictionary
        }
      };

    default:
      return state;
  }
};

export default votesReducer;
