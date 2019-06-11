import React from 'react';
import { Question } from 'typings/Question.proptypes';
import {
  QuestionCardContainer,
  QuestionCardQuestion,
  QuestionCardChoices,
  QuestionCardDate
} from './QuestionCard.styles';

const QuestionCard = ({ questionItem }) => {
  const { question, choices, published_at, url } = questionItem;
  const humanReadableDate = new Date(published_at).toDateString();
  return (
    <QuestionCardContainer to={url}>
      <QuestionCardQuestion>{question}</QuestionCardQuestion>
      <QuestionCardDate>{humanReadableDate}</QuestionCardDate>
      <QuestionCardChoices>
        Choices: {choices && choices.length}
      </QuestionCardChoices>
    </QuestionCardContainer>
  );
};

QuestionCard.propTypes = {
  questionItem: Question
};

export default QuestionCard;
