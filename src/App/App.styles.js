import styled from 'styled-components';
import { media } from 'utils/style/style-utils';

export const AppContainer = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  ${media.mdQuery` 
    padding: 40px;`}
`;
