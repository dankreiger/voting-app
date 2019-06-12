import { shapeOf, string } from 'prop-types';
import { Question } from './Question.proptypes.js';

export const QuestionDictionary = shapeOf({
  [string]: Question
});
