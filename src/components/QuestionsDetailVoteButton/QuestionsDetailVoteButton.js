import React, { useState } from 'react';
import { func, string } from 'prop-types';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import { QuestionsDetailVoteButtonContainer } from './QuestionsDetailVoteButton.styles';
import { createVotingPostUrl } from 'utils/http/api';
import axios from 'axios';

const QuestionsDetailVoteButton = ({
  questionId,
  choiceId,
  refreshPageDetails
}) => {
  const [requestInProgress, setRequestInProgress] = useState(false);
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
      setRequestInProgress(true);
      const res = await axios.post(postUrl);
      await res.data;
      refreshPageDetails()
        .then(res => {
          setRequestInProgress(false);
        })
        .catch(err => console.log('error on refresh', err));
    } catch (err) {
      console.error(err);
    } finally {
    }
  };
  return (
    <QuestionsDetailVoteButtonContainer buttonFadingOut={buttonFadingOut}>
      {requestInProgress ? (
        <LoadingSpinner variation="rect" />
      ) : (
        <button onClick={preparePostVote}>Vote</button>
      )}
    </QuestionsDetailVoteButtonContainer>
  );
};

QuestionsDetailVoteButton.propTypes = {
  choiceId: string,
  questionId: string,
  refreshPageDetails: func
};

export default QuestionsDetailVoteButton;
