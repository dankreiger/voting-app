import React from 'react';
import { arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import shortid from 'shortid';
import * as actions from 'actions';
import { Question } from 'typings/Question.proptypes';
import {
  QuestionsListContainer,
  QuestionsListGrid
} from './QuestionsList.styles';
import QuestionCard from 'components/QuestionCard/QuestionCard';
import QuestionsHeaderRow from 'components/QuestionsHeaderRow/QuestionsHeaderRow';

const QuestionsList = ({ questions }) => {
  return (
    questions.length > 0 && (
      <QuestionsListContainer>
        <QuestionsHeaderRow
          headlineText="Questions"
          buttonText="Add a new question"
          buttonLink="/new-question"
        />

        <QuestionsListGrid>
          {questions.map(questionItem => (
            <QuestionCard
              key={shortid.generate()}
              questionItem={questionItem}
            />
          ))}
        </QuestionsListGrid>
      </QuestionsListContainer>
    )
  );
};

QuestionsList.propTypes = {
  questions: arrayOf(Question)
};

const mapStateToProps = ({ questionsReducer }) => ({
  questions: questionsReducer.questions
});

export default connect(
  mapStateToProps,
  actions
)(QuestionsList);
