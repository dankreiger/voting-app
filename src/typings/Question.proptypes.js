import { arrayOf, shape, string } from 'prop-types';
import { Choice } from './Choice.proptypes';

export const Question = shape({
  url: string.isRequired,
  published_at: string.isRequired,
  question: string.isRequired,
  choices: arrayOf(Choice).isRequired
});
