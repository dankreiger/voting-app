import styled from 'styled-components';
import { lightTeal, teal } from 'utils/style/colors';

export const NewQuestionFormInputGroupContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const NewQuestionFormInputField = styled.input`
  background: none;
  color: ${teal};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  box-sizing: border-box;
  border: none;
  width: 100%;
  max-width: 800px;
  border-radius: 0;
  border-bottom: 1px solid ${lightTeal};
  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:valid ~ label {
    font-size: 12px;
    color: ${teal};
  }
  &:focus ~ .bar:before {
    width: 100%;
    max-width: 800px;
  }
`;
export const NewQuestionFormInputHighlight = styled.span``;
export const NewQuestionFormInputBar = styled.span`
  position: relative;
  display: block;
  width: 100%;
  max-width: 800px;

  &:before {
    content: '';
    height: 2px;
    width: 0;
    bottom: 0px;
    position: absolute;
    background: ${teal};
    transition: 250ms ease all;
    left: 0%;
  }
`;
export const NewQuestionFormInputLabel = styled.label`
  font-size: 16px;
  font-weight: normal;
  pointer-events: none;
  color: ${lightTeal};
  transition: 250ms ease all;
  margin-top: 10px;
`;
