import React from 'react';
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
  const { choice, votes } = choiceItem;

  const percentOfTotal = Math.round((votes / totalVotes) * 100000) / 1000 || 0;
  const isMobile = windowWidth < sizes.smQuery;

  const renderDetailTable = () => (
    <QuestionsDetailChoiceContainer>
      <QuestionDetailChoiceCol>{choice}</QuestionDetailChoiceCol>
      <QuestionDetailChoiceCol>{votes}</QuestionDetailChoiceCol>
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
          questionId={questionId}
          choiceItem={choiceItem}
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
          questionId={questionId}
          choiceItem={choiceItem}
          refreshPageDetails={refreshPageDetails}
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
