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

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const QuestionsDetailVoteButtonElement = styled.button`
  ${buttonStyle};
  background-color: ${lightGray};
  font-size: 16px;
  transition: background-color 250ms, box-shadow 250ms;
  animation: fadeIn 750ms ease;
  ${({ buttonFadingOut }) =>
    buttonFadingOut && `animation: fadeOut 250ms; pointer-events: none;`}
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
