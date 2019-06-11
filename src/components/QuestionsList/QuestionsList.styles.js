import styled from 'styled-components';
import { media } from 'utils/style/style-utils';

export const QuestionsListContainer = styled.div``;

export const QuestionsListHeadline = styled.h1`
  margin-bottom: 40px;
  font-weight: 300;
`;

export const QuestionsListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  ${media.smQuery` 
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    `}
  ${media.lgQuery` 
    grid-template-columns: repeat(4, 1fr);
    `}
`;
