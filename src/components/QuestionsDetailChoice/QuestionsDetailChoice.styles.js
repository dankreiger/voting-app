import styled from 'styled-components';
import { media } from 'utils/style/style-utils';
import { teal } from 'utils/style/colors';

const QuestionDetailChoiceVotesBar = styled.div`
  height: 10px;
  width: 100%;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.8);
`;

export const QuestionsDetailChoiceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  padding: 20px;
  font-weight: bold;
  color: #fff;
  justify-items: center;
  align-items: center;
  background: ${teal};
  ${media.smQuery` 
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    `}
`;

export const QuestionsDetailMobileContainer = styled.div`
  background: ${teal};
  margin-bottom: 40px;
  padding: 20px;
`;

export const QuestionDetailChoiceCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const QuestionDetailChoiceVotesBarContainer = styled(
  QuestionDetailChoiceVotesBar
)`
  height: 10px;
`;
export const QuestionDetailChoiceVotesBarInner = styled(
  QuestionDetailChoiceVotesBar
)`
  ${({ width }) => `width: ${width}%`};
  transition: width 500ms;
  background: #fff;
`;

export const QuestionDetailChoiceVotesPercent = styled.div`
  margin-top: 10px;
  font-size: 12px;
`;

export const QuestionsDetailChoiceMobileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
