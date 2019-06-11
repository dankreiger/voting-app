import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { arrayOf, bool, shape, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { Question } from 'typings/Question.proptypes';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import {
  QuestionsDetailContainer,
  QuestionsDetailList,
  QuestionsDetailListHeaders,
  QuestionDetailHeader,
  QuestionDetailCurrentQuestion
} from './QuestionsDetail.styles';
import QuizDetailChoice from 'components/QuizDetailChoice/QuizDetailChoice';
import shortid from 'shortid';

const QuestionsDetail = ({ match, questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(null);

  /* if data were large, I'd memoize this and cache the result */
  const getCurrentQuestion = () => {
    setCurrentQuestion(questions.find(question => question.url === match.url));
  };
  useEffect(() => {
    getCurrentQuestion();
  });

  const renderQuestionsDetail = () => {
    const { question, choices } = currentQuestion;
    const totalVotes = choices.reduce((acc, cur) => acc + cur.votes, 0);
    return (
      <>
        <Link to="/">Back</Link>
        <QuestionDetailHeader>Questions Detail</QuestionDetailHeader>
        <QuestionDetailCurrentQuestion>
          Question: {question}
        </QuestionDetailCurrentQuestion>
        <QuestionsDetailList>
          <QuestionsDetailListHeaders>
            <div>Choice</div>
            <div>Votes</div>
            <div>Percent</div>
          </QuestionsDetailListHeaders>
          {choices.map(choiceItem => (
            <QuizDetailChoice
              key={shortid.generate()}
              choiceItem={choiceItem}
              totalVotes={totalVotes}
            />
          ))}
        </QuestionsDetailList>
      </>
    );
  };

  return (
    <QuestionsDetailContainer>
      {!currentQuestion ? <LoadingSpinner /> : renderQuestionsDetail()}
    </QuestionsDetailContainer>
  );
};

QuestionsDetail.propTypes = {
  match: shape({
    isExact: bool,
    params: shape({ questionId: string }),
    path: string,
    url: string
  }),
  questions: arrayOf(Question)
};

const mapStateToProps = ({ questionsReducer }) => ({
  questions: questionsReducer.questions
});

export default connect(
  mapStateToProps,
  null
)(QuestionsDetail);
