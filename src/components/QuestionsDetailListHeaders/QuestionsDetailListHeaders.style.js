import styled from 'styled-components';
import { QuestionsDetailChoiceContainer } from 'components/QuestionsDetailChoice/QuestionsDetailChoice.styles';
import { media } from 'utils/style/style-utils';
import { lightTeal } from 'utils/style/colors';

export const QuestionsDetailListHeadersContainer = styled(
  QuestionsDetailChoiceContainer
)`
  ${media.smQuery` 
    background: ${lightTeal};
  `}
`;
