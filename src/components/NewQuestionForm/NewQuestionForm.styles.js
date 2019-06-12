import styled from 'styled-components';
import { buttonStyle } from 'utils/style/genericComponents';
import { media } from 'utils/style/style-utils';

export const NewQuestionFormContainer = styled.div`
  width: 100%;
`;

export const NewQuestionFormInputsContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  margin-top: 80px;
`;

export const NewQuestionFormAddChoiceButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${media.smQuery`
    flex-direction: row;
  `}
`;
export const NewQuestionFormAddChoiceButton = styled.button`
  ${buttonStyle}
  width: 250px;
  margin: 0 auto;
  button {
    margin: 0;
  }
`;
