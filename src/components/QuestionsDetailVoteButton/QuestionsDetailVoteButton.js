import React, { useState } from 'react';
import { func, string } from 'prop-types';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import { QuestionsDetailVoteButtonContainer } from './QuestionsDetailVoteButton.styles';
import { createVotingPostUrl } from 'utils/http/api';
import axios from 'axios';

const QuestionsDetailVoteButton = ({
  setCurrentVotes,
  questionId,
  choiceId,
  refreshPageDetails
}) => {
  const [postInProgress, setPostInProgress] = useState(false);
  const [buttonFadingOut, setButtonFadingOut] = useState(false);
  const preparePostVote = async () => {
    setButtonFadingOut(true);
    setTimeout(() => {
      setButtonFadingOut(false);
      executePostVote();
    }, 250);
  };
  const executePostVote = async () => {
    const postUrl = createVotingPostUrl(questionId, choiceId);
    try {
      setPostInProgress(true);
      const res = await axios.post(postUrl);
      const { votes } = await res.data;
      setCurrentVotes(votes);
      refreshPageDetails();
    } catch (err) {
      console.error(err);
    } finally {
      setPostInProgress(false);
    }
  };
  return (
    <QuestionsDetailVoteButtonContainer buttonFadingOut={buttonFadingOut}>
      {postInProgress ? (
        <LoadingSpinner variation="rect" />
      ) : (
        <button onClick={preparePostVote}>Vote</button>
      )}
    </QuestionsDetailVoteButtonContainer>
  );
};

QuestionsDetailVoteButton.propTypes = {
  choiceId: string,
  setCurrentVotes: func,
  questionId: string,
  refreshPageDetails: func
};

export default QuestionsDetailVoteButton;
