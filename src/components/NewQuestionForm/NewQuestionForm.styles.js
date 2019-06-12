import styled from 'styled-components';
import { buttonStyle } from 'utils/style/genericComponents';
import { darkPink } from 'utils/style/colors';

export const NewQuestionFormContainer = styled.div`
  width: 100%;
`;

export const NewQuestionFormInputsContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  margin-top: 80px;
  &.errorAnimation {
    animation: errorShake 250ms forwards ease-in-out;
  }
`;

export const NewQuestionFormAddChoiceButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  height: 180px;
`;
export const NewQuestionFormAddChoiceButton = styled.button`
  ${buttonStyle}
  width: 250px;
  margin: 0 auto;
  button {
    margin: 0;
  }

  @keyframes errorShake {
    0% {
      transform: translate(30px);
    }
    20% {
      transform: translate(-30px);
    }
    40% {
      transform: translate(15px);
    }
    60% {
      transform: translate(-15px);
    }
    80% {
      transform: translate(8px);
    }
    100% {
      transform: translate(0px);
    }
  }
`;

export const NewQuestionFormValidationMessage = styled.p`
  color: ${darkPink};
`;
