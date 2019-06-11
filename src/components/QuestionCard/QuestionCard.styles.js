import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { cardStyle } from 'utils/style/style-utils';

export const QuestionCardContainer = styled(Link)`
  display: block;
  ${cardStyle}
`;

export const QuestionCardQuestion = styled.h3`
  margin-bottom: 20px;
`;
export const QuestionCardDate = styled.p`
  margin-bottom: 20px;
`;
export const QuestionCardChoices = styled.p``;
