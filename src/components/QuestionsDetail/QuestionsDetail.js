import React, { useEffect, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { bool, shape, string } from 'prop-types';
import shortid from 'shortid';
import { Question } from 'typings/Question.proptypes';
import * as actions from 'actions';
import axios from 'axios';
import { apiQuestionsBase } from 'utils/http/api';
import {
  QuestionsDetailContainer,
  QuestionsDetailList,
  QuestionDetailCurrentQuestion
} from './QuestionsDetail.styles';
import { sizes } from 'utils/style/style-utils';
import { useWindowWidth } from 'hooks/useWindowWidth';

import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import QuestionsDetailChoice from 'components/QuestionsDetailChoice/QuestionsDetailChoice';
import QuestionsDetailListHeaders from 'components/QuestionsDetailListHeaders/QuestionsDetailListHeaders';
import QuestionsHeaderRow from 'components/QuestionsHeaderRow/QuestionsHeaderRow';

const QuestionsDetail = ({ match, questionDictionary }) => {
  const windowWidth = useWindowWidth();

  const [currentQuestion, setCurrentQuestion] = useState(null);

  /* use dictionary for O(1) lookup */
  const getCurrentQuestion = useCallback(() => {
    if (questionDictionary) {
      setCurrentQuestion(questionDictionary[match.url]);
    }
  }, [match, questionDictionary]);

  useEffect(() => {
    getCurrentQuestion();
  }, [getCurrentQuestion]);

  const renderQuestionsDetail = () => {
    const { question, choices } = currentQuestion;
    const { questionId } = match.params;
    const totalVotes = choices.reduce((acc, cur) => acc + cur.votes, 0);

    const refreshPageDetails = async () => {
      try {
        const response = await axios.get(`${apiQuestionsBase}/${questionId}`);
        const data = await response.data;
        setCurrentQuestion(data);
      } catch (err) {
        console.log('error with refresh', err);
      }
    };
    return (
      <>
        <QuestionsHeaderRow
          headlineText="Questions Detail"
          buttonText="Back"
          buttonLink="/"
        />
        <QuestionDetailCurrentQuestion>
          <span>Question:</span> <span>{question}</span>
        </QuestionDetailCurrentQuestion>
        <QuestionsDetailList>
          {windowWidth >= sizes.smQuery && <QuestionsDetailListHeaders />}
          {choices.map(choiceItem => (
            <QuestionsDetailChoice
              key={shortid.generate()}
              windowWidth={windowWidth}
              choiceItem={choiceItem}
              totalVotes={totalVotes}
              questionId={questionId}
              refreshPageDetails={refreshPageDetails}
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
  questionDictionary: shape({
    [string]: Question
  })
};

const mapStateToProps = ({ questionsReducer }) => ({
  questionDictionary: questionsReducer.questionDictionary
});

export default connect(
  mapStateToProps,
  actions
)(QuestionsDetail);
