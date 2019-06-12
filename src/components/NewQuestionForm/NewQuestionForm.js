import React, { Component } from 'react';
import { func } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from 'actions';
import { apiQuestionsBase } from 'utils/http/api';
import classNames from 'classnames';

import QuestionsHeaderRow from 'components/QuestionsHeaderRow/QuestionsHeaderRow';
import {
  NewQuestionFormContainer,
  NewQuestionFormInputsContainer,
  NewQuestionFormAddChoiceButton,
  NewQuestionFormAddChoiceButtonWrapper,
  NewQuestionFormValidationMessage
} from './NewQuestionForm.styles';
import { newQuestionFormInitialState } from './newQuestionFormInitialState';
import NewQuestionFormInputGroup from 'components/NewQuestionFormInputGroup/NewQuestionFormInputGroup';
import { lightTeal, teal, navy, darkNavy } from 'utils/style/colors';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

class NewQuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = newQuestionFormInitialState;
  }

  handleSubmitQuestion = async () => {
    const { question, userChoices } = this.state;
    const choices = Object.values(userChoices).filter(choice => choice);

    if (choices.length < 2) {
      this.setState({ errorAnimation: true, invalid: true });
      setTimeout(() => {
        this.setState({ errorAnimation: false });
      }, 250);
      return;
    }

    const choicesPostData = {
      question,
      choices
    };

    this.setState({ submissionInProgress: true }, async () => {
      try {
        const response = await axios.post(apiQuestionsBase, choicesPostData);
        const data = await response.data;
        console.log('success', data);
        this.setState({ submissionInProgress: false, questionSubmitted: true });
      } catch (err) {
        console.log('error', err);
        alert('Submission Failed');
      }
    });
  };

  handleQuestionInputChange = ({ target }) => {
    console.log(target.value);
    this.setState({ invalid: false });
    this.setState({ question: target.value });
  };

  handleChoiceInputChange = ({ target }) => {
    const { userChoices } = this.state;
    this.setState({
      userChoices: { ...userChoices, [target.name]: target.value }
    });
  };

  incrementchoiceFieldCount = () => {
    this.setState(prevState => ({
      choiceFieldCount: prevState.choiceFieldCount + 1
    }));
  };

  render() {
    const {
      choiceFieldCount,
      userChoices,
      questionSubmitted,
      submissionInProgress,
      question,
      invalid,
      errorAnimation
    } = this.state;

    if (questionSubmitted) {
      this.props.fetchQuestions();
      return <Redirect to="/" />;
    }
    if (submissionInProgress) {
      return <LoadingSpinner />;
    }
    return (
      <NewQuestionFormContainer>
        <QuestionsHeaderRow
          headlineText="Add a new question"
          buttonText="Back"
          buttonLink="/"
        />
        <NewQuestionFormInputsContainer
          className={classNames({ errorAnimation })}
        >
          <NewQuestionFormInputGroup
            inputLabel="Enter a new question"
            handleOnChange={this.handleQuestionInputChange}
            inputName="inputQuestion"
            color={lightTeal}
            activeColor={teal}
            invalid={invalid}
            value={question}
          />
          {choiceFieldCount > 0 &&
            [...Array(choiceFieldCount).keys()].map(idx => (
              <NewQuestionFormInputGroup
                key={idx}
                handleOnChange={this.handleChoiceInputChange}
                inputName={`choice${idx}`}
                inputValue={userChoices[`choice${idx}`]}
                inputIndex={idx}
                color={navy}
                invalid={invalid}
                activeColor={darkNavy}
              />
            ))}
        </NewQuestionFormInputsContainer>
        <NewQuestionFormAddChoiceButtonWrapper>
          {invalid && (
            <NewQuestionFormValidationMessage>
              Note: At least 1 question and 2 choices must be filled in
            </NewQuestionFormValidationMessage>
          )}
          <NewQuestionFormAddChoiceButton
            onClick={this.incrementchoiceFieldCount}
          >
            Add new choice{' '}
          </NewQuestionFormAddChoiceButton>
          <NewQuestionFormAddChoiceButton onClick={this.handleSubmitQuestion}>
            Submit Question{' '}
          </NewQuestionFormAddChoiceButton>
        </NewQuestionFormAddChoiceButtonWrapper>
      </NewQuestionFormContainer>
    );
  }
}

NewQuestionForm.propTypes = {
  fetchQuestions: func
};

export default connect(
  null,
  actions
)(NewQuestionForm);
