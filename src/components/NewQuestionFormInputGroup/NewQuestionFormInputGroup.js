import React, { memo } from 'react';
import { number, func, string } from 'prop-types';
import {
  NewQuestionFormInputGroupContainer,
  NewQuestionFormInputField,
  NewQuestionFormInputHighlight,
  NewQuestionFormInputBar,
  NewQuestionFormInputLabel
} from './NewQuestionFormInputGroup.styles';

const NewQuestionFormInputGroup = memo(
  ({ handleOnChange, inputLabel, inputName, inputValue }) => {
    return (
      <NewQuestionFormInputGroupContainer>
        <NewQuestionFormInputField
          name={inputName}
          onChange={handleOnChange}
          value={inputValue}
        />
        <NewQuestionFormInputHighlight />
        <NewQuestionFormInputBar className="bar" />
        <NewQuestionFormInputLabel>
          {inputLabel || 'Enter a new choice'}
        </NewQuestionFormInputLabel>
      </NewQuestionFormInputGroupContainer>
    );
  }
);

NewQuestionFormInputGroup.propTypes = {
  inputIndex: number,
  handleOnChange: func,
  inputValue: string,
  inputLabel: string
};

export default NewQuestionFormInputGroup;
