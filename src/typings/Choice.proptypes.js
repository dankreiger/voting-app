import { number, shape, string } from 'prop-types';

export const Choice = shape({
  url: string.isRequired,
  votes: number.isRequired,
  choice: string.isRequired
});
