import React from 'react';
import { arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import shortid from 'shortid';
import * as actions from 'actions';
import { Question } from 'typings/Question.proptypes';
import {
  QuestionsListContainer,
  QuestionsListHeadline,
  QuestionsListGrid
} from './QuestionsList.styles';
import QuestionCard from 'components/QuestionCard/QuestionCard';

const QuestionsList = ({ questions }) => {
  return (
    questions.length > 0 && (
      <QuestionsListContainer>
        <QuestionsListHeadline>Questions</QuestionsListHeadline>
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
