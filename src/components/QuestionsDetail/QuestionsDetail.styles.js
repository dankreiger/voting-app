import styled from 'styled-components';
import { media } from 'utils/style/style-utils';
import { teal } from 'utils/style/colors';

export const QuestionsDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const QuestionDetailHeader = styled.h1`
  margin-bottom: 20px;
`;

export const QuestionDetailCurrentQuestion = styled.h2`
  margin-bottom: 20px;
`;

export const QuestionsDetailList = styled.div`
  flex-grow: 1;
`;

export const QuestionsDetailListHeaders = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  padding: 20px;
  background: ${teal};
  filter: opacity(0.8);
  font-weight: bold;
  color: #fff;
  ${media.smQuery` 
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    `}
`;
