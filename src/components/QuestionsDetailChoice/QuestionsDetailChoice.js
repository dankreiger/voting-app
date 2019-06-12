import React, { useState } from 'react';
import { func, number, string } from 'prop-types';
import { Choice } from 'typings/Choice.proptypes';
import {
  QuestionsDetailChoiceContainer,
  QuestionsDetailChoiceMobileGrid,
  QuestionsDetailMobileContainer,
  QuestionDetailChoiceCol,
  QuestionDetailChoiceVotesBarContainer,
  QuestionDetailChoiceVotesBarInner,
  QuestionDetailChoiceVotesPercent
} from './QuestionsDetailChoice.styles';
import QuestionsDetailListHeaders from 'components/QuestionsDetailListHeaders/QuestionsDetailListHeaders';
import { sizes } from 'utils/style/style-utils';
import QuestionsDetailVoteButton from 'components/QuestionsDetailVoteButton/QuestionsDetailVoteButton';

const QuestionsDetailChoice = ({
  choiceItem,
  totalVotes,
  windowWidth,
  questionId,
  refreshPageDetails
}) => {
  const { choice, votes, url } = choiceItem;
  const [currentVotes, setCurrentVotes] = useState(votes);

  const percentOfTotal =
    Math.round((currentVotes / totalVotes) * 100000) / 1000 || 0;
  const splitUrl = url.split('/');
  const choiceId = splitUrl[splitUrl.length - 1];
  const isMobile = windowWidth < sizes.smQuery;

  const renderDetailTable = () => (
    <QuestionsDetailChoiceContainer>
      <QuestionDetailChoiceCol>{choice}</QuestionDetailChoiceCol>
      <QuestionDetailChoiceCol>{currentVotes}</QuestionDetailChoiceCol>
      <QuestionDetailChoiceCol>
        <QuestionDetailChoiceVotesBarContainer>
          <QuestionDetailChoiceVotesBarInner
            width={percentOfTotal}
          ></QuestionDetailChoiceVotesBarInner>
        </QuestionDetailChoiceVotesBarContainer>
        <QuestionDetailChoiceVotesPercent>
          {percentOfTotal}%
        </QuestionDetailChoiceVotesPercent>
      </QuestionDetailChoiceCol>
      {!isMobile && (
        <QuestionsDetailVoteButton
          setCurrentVotes={setCurrentVotes}
          choiceId={choiceId}
          questionId={questionId}
          refreshPageDetails={refreshPageDetails}
        />
      )}
    </QuestionsDetailChoiceContainer>
  );
  if (isMobile) {
    return (
      <QuestionsDetailMobileContainer>
        <QuestionsDetailChoiceMobileGrid>
          <QuestionsDetailListHeaders />
          {renderDetailTable()}
        </QuestionsDetailChoiceMobileGrid>
        <QuestionsDetailVoteButton
          setCurrentVotes={setCurrentVotes}
          choiceId={choiceId}
          questionId={questionId}
        />
      </QuestionsDetailMobileContainer>
    );
  } else {
    return renderDetailTable();
  }
};

QuestionsDetailChoice.propTypes = {
  choiceItem: Choice,
  totalVotes: number,
  refreshPageDetails: func,
  questionId: string,
  windowWidth: number
};

export default QuestionsDetailChoice;
