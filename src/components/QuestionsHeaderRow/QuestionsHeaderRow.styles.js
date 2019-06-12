import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { buttonStyle } from 'utils/style/genericComponents';
import { media } from 'utils/style/style-utils';
export const QuestionsHeaderRowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 40px;
  width: 100%;
  ${media.smQuery`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

export const QuestionsHeaderRowHeadline = styled.h1`
  justify-self: center;
  align-self: center;
  margin-bottom: 20px;
  ${media.smQuery`
    justify-self: flex-start;
    margin-bottom: 0px;
  `}
`;

export const QuestionDetailCurrentQuestion = styled.h2`
  margin-bottom: 20px;
`;

export const QuestionsHeaderRowButton = styled(Link)`
  ${buttonStyle}
  align-self: center;
  justify-self: flex-end;
`;
