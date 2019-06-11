import React from 'react';
import { number } from 'prop-types';
import { Choice } from 'typings/Choice.proptypes';
import { QuizDetailChoiceContainer } from './QuizDetailChoice.styles';

const QuizDetailChoice = ({ choiceItem, totalVotes }) => {
  const { choice, votes } = choiceItem;
  const percentOfTotal = Math.round((votes / totalVotes) * 100);
  return (
    <QuizDetailChoiceContainer>
      <div>{choice}</div>
      <div>{votes}</div>
      <div>{percentOfTotal}%</div>
    </QuizDetailChoiceContainer>
  );
};

QuizDetailChoice.propTypes = {
  choiceItem: Choice,
  totalVotes: number
};

export default QuizDetailChoice;
