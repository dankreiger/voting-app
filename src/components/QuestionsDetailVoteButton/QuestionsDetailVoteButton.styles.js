import styled from 'styled-components';
import { lightGray, white, gray } from 'utils/style/colors';

export const QuestionsDetailVoteButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 80%;
  margin: 0 auto;
  button {
    flex-grow: 1;
    background-color: ${lightGray};
    font-size: 16px;
    border-radius: 2px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
    height: 100%;
    transition: background-color 250ms, box-shadow 250ms;
    border: none;
    cursor: pointer;
    animation: fadeIn 250ms;
    ${({ buttonFadingOut }) => buttonFadingOut && `animation: fadeOut 250ms;`}
    &:hover {
      background-color: ${white};
    }
    &:active {
      background-color: ${gray};
      box-shadow: none;
      outline: 0;
    }
    &:focus {
      outline: 0;
    }
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
