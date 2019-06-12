import styled from 'styled-components';
import { darkPink, pink } from 'utils/style/colors';

export const NewQuestionFormInputGroupContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

/* normally would set this in a component library with tidier styles */
export const NewQuestionFormInputField = styled.input`
  background: none;
  color: ${({ activeColor, invalid }) => (invalid ? darkPink : activeColor)};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  box-sizing: border-box;
  border: none;
  width: 100%;
  max-width: 800px;
  border-radius: 0;
  border-bottom: ${({ color, invalid }) =>
    `1px solid ${invalid ? pink : color}`};
  &:focus {
    outline: 0;
  }
  &:focus ~ label,
  &:valid ~ label {
    font-size: 12px;
    color: ${({ activeColor, invalid }) => (invalid ? darkPink : activeColor)};
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
    background: ${({ activeColor, invalid }) =>
      invalid ? darkPink : activeColor};
    transition: 250ms ease all;
    left: 0%;
  }
`;
export const NewQuestionFormInputLabel = styled.label`
  font-size: 16px;
  font-weight: normal;
  pointer-events: none;
  transition: 250ms ease all;
  margin-top: 10px;
`;
