import styled from 'styled-components';
import { cardStyle, media } from 'utils/style/style-utils';

export const QuizDetailChoiceContainer = styled.div`
  ${cardStyle}
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  ${media.smQuery` 
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    `}
`;
