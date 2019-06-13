import styled from 'styled-components';
import { lightGray, white, gray } from 'utils/style/colors';
import { buttonStyle } from 'utils/style/genericComponents';

export const QuestionsDetailVoteButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 80%;
  margin: 0 auto;
  &:focus {
    outline: 0;
  }
`;

export const QuestionsDetailVoteButtonElement = styled.button`
  ${buttonStyle};
  background-color: ${lightGray};
  font-size: 16px;
  transition: background-color 250ms, box-shadow 250ms;
  animation: 500ms fadeIn ease 0s;
  ${({ buttonFadingOut }) =>
    buttonFadingOut &&
    `animation: 250ms fadeOut ease 0s; pointer-events: none;`}
  &:hover {
    background-color: ${white};
  }
  &:active {
    background-color: ${gray};
  }
`;

export const QuestionsDetailSelectedVote = styled.div`
  font-size: 18px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
