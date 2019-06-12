import { string, shape } from 'prop-types';
import { Choice } from './Choice.proptypes.js';

export const RegisteredVote = shape({
  questionId: string,
  choiceItem: Choice
});
