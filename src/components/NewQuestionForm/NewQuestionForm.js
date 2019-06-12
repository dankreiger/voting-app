import React, { Component } from 'react';
import { func } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from 'actions';
import { apiQuestionsBase } from 'utils/http/api';

import QuestionsHeaderRow from 'components/QuestionsHeaderRow/QuestionsHeaderRow';
import {
  NewQuestionFormContainer,
  NewQuestionFormInputsContainer,
  NewQuestionFormAddChoiceButton,
  NewQuestionFormAddChoiceButtonWrapper
} from './NewQuestionForm.styles';
import { newQuestionFormInitialState } from './newQuestionFormInitialState';
import NewQuestionFormInputGroup from 'components/NewQuestionFormInputGroup/NewQuestionFormInputGroup';

class NewQuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = newQuestionFormInitialState;
  }

  handleSubmitQuestion = async () => {
    const { question, userChoices } = this.state;
    const choices = Object.values(userChoices).filter(choice => choice);

    const choicesPostData = {
      question,
      choices
    };
    try {
      const response = await axios.post(apiQuestionsBase, choicesPostData);
      const data = await response.data;
      console.log('success', data);
      this.setState({ questionSubmitted: true });
    } catch (err) {
      console.log('error', err);
    }
  };

  handleQuestionInputChange = ({ target }) => {
    console.log(target.value);
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
      question
    } = this.state;

    if (questionSubmitted) {
      this.props.fetchQuestions();
      return <Redirect to="/" />;
    }
    return (
      <NewQuestionFormContainer>
        <QuestionsHeaderRow
          headlineText="Add a new question"
          buttonText="Back"
          buttonLink="/"
        />
        <NewQuestionFormInputsContainer>
          <NewQuestionFormInputGroup
            inputLabel="Enter a new question"
            handleOnChange={this.handleQuestionInputChange}
            inputName="inputQuestion"
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
              />
            ))}
        </NewQuestionFormInputsContainer>
        <NewQuestionFormAddChoiceButtonWrapper>
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
