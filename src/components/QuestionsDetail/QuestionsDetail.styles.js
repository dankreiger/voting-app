import styled from 'styled-components';
import { media } from 'utils/style/style-utils';

export const QuestionsDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const QuestionDetailCurrentQuestion = styled.h2`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span:last-child {
    font-size: 32px;
    text-align: center;
  }
  ${media.smQuery`
    flex-direction: row;
    span {
    &:first-child{
      padding-right: 10px;
    }
    &:last-child {
      font-size: 32px;
      padding-left: 10px;
      }
    }    
  `}
`;

export const QuestionsDetailList = styled.div`
  flex-grow: 1;
  font-size: 18px;
`;
