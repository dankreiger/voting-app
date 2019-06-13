import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bool, func, number, shape, string } from 'prop-types';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import {
  QuestionsDetailVoteButtonContainer,
  QuestionsDetailVoteButtonElement,
  QuestionsDetailSelectedVote
} from './QuestionsDetailVoteButton.styles';
import * as actions from 'actions';
import { RegisteredVote } from 'typings/RegisteredVote.proptypes';

const QuestionsDetailVoteButton = ({
  questionId,
  choiceItem,
  postVote,
  choicedIdProcessing,
  postInProgress,
  updateVoteInQuestionDictionary,
  registeredVoteDictionary
}) => {
  const [buttonFadingOut, setButtonFadingOut] = useState(false);
  const [votingClosed, setVotingClosed] = useState(true);

  const { url } = choiceItem;
  const splitUrl = url.split('/');
  const choiceId = splitUrl[splitUrl.length - 1];

  const preparePostVote = async () => {
    setButtonFadingOut(true);
    setTimeout(() => {
      postVote(questionId, choiceId)
        .then(postedItem => {
          updateVoteInQuestionDictionary(
            questionId,
            postedItem.payload.choiceItem
          );
        })
        .catch(err => console.log('error with post', err));
      setButtonFadingOut(false);
    }, 250);
  };

  useEffect(() => {
    if (registeredVoteDictionary && registeredVoteDictionary[questionId]) {
      setVotingClosed(true);
    } else {
      setVotingClosed(false);
    }
  }, [registeredVoteDictionary, questionId]);

  if (
    registeredVoteDictionary &&
    registeredVoteDictionary[questionId] &&
    registeredVoteDictionary[questionId].url === url
  ) {
    return <QuestionsDetailSelectedVote>voted</QuestionsDetailSelectedVote>;
  }
  if (votingClosed) {
    return <></>;
  }
  return (
    <QuestionsDetailVoteButtonContainer>
      {postInProgress ? (
        <LoadingSpinner variation="rect" />
      ) : (
        <QuestionsDetailVoteButtonElement
          buttonFadingOut={buttonFadingOut}
          onClick={preparePostVote}
        >
          Vote {choicedIdProcessing}
        </QuestionsDetailVoteButtonElement>
      )}
    </QuestionsDetailVoteButtonContainer>
  );
};

QuestionsDetailVoteButton.propTypes = {
  questionId: string,
  postVote: func,
  postInProgress: bool,
  choicedIdProcessing: string,
  choiceItem: shape({
    url: string,
    votes: number,
    choice: string
  }),
  registeredVoteDictionary: shape({
    [string]: RegisteredVote
  })
};

const mapStateToProps = ({ votesReducer }) => ({
  postInProgress: votesReducer.postInProgress,
  choicedIdProcessing: votesReducer.choicedIdProcessing,
  registeredVoteDictionary: votesReducer.registeredVoteDictionary
});
export default connect(
  mapStateToProps,
  actions
)(QuestionsDetailVoteButton);
