import React, { useEffect, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { arrayOf, bool, func, shape, string } from 'prop-types';
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
import * as actions from 'actions';

const QuestionsDetail = ({
  cacheCurrentQuestion,
  cachedQuestions,
  match,
  questions
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [cacheChecked, setCacheChecked] = useState(false);

  const getCurrentQuestion = useCallback(() => {
    console.log('Only executes on an unvisited route');
    const result = questions.find(question => question.url === match.url);
    cacheCurrentQuestion(result);
    setCurrentQuestion(result);
  }, [cacheCurrentQuestion, setCurrentQuestion, questions, match]);

  /* look for cached question */
  useEffect(() => {
    /* use O(1) dictionary find instead of O(n) iteration to look for cached question */
    const cachedQuestion = cachedQuestions[match.url];
    if (!currentQuestion && cachedQuestion) {
      setCurrentQuestion(cachedQuestion);
    }
    setCacheChecked(true);
  }, [cachedQuestions, currentQuestion, match]);

  /* if no cached question exists, find the question */
  useEffect(() => {
    const cachedQuestion = cachedQuestions[match.url];
    if (cacheChecked && !cachedQuestion) {
      getCurrentQuestion();
    }
  }, [cacheChecked, getCurrentQuestion, cachedQuestions, match]);

  const renderQuestionsDetail = () => {
    const { question, choices } = cachedQuestions[match.url];
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
  cachedQuestions: shape({
    [string]: Question
  }),
  cacheCurrentQuestion: func,
  match: shape({
    isExact: bool,
    params: shape({ questionId: string }),
    path: string,
    url: string
  }),
  questions: arrayOf(Question)
};

const mapStateToProps = ({ questionsReducer }) => ({
  cachedQuestions: questionsReducer.cachedQuestions,
  questions: questionsReducer.questions
});

export default connect(
  mapStateToProps,
  actions
)(QuestionsDetail);
