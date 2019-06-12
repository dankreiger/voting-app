import React, { memo } from 'react';
import { bool, number, func, string } from 'prop-types';
import {
  NewQuestionFormInputGroupContainer,
  NewQuestionFormInputField,
  NewQuestionFormInputHighlight,
  NewQuestionFormInputBar,
  NewQuestionFormInputLabel
} from './NewQuestionFormInputGroup.styles';

const NewQuestionFormInputGroup = memo(
  ({
    handleOnChange,
    inputLabel,
    inputName,
    inputValue,
    color,
    activeColor,
    invalid
  }) => {
    return (
      <NewQuestionFormInputGroupContainer>
        <NewQuestionFormInputField
          name={inputName}
          onChange={handleOnChange}
          value={inputValue}
          color={color}
          activeColor={activeColor}
          invalid={invalid}
        />
        <NewQuestionFormInputHighlight />
        <NewQuestionFormInputBar
          className="bar"
          invalid={invalid}
          activeColor={activeColor}
        />
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
  inputLabel: string,
  color: string,
  activeColor: string,
  invalid: bool
};

export default NewQuestionFormInputGroup;
