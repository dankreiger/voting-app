import styled from 'styled-components';
import { media } from 'utils/style/style-utils';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  ${media.mdQuery` 
    padding: 40px;`}
`;
