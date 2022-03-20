import styled from 'styled-components';
import { fontSizes, fontWeights } from 'styles/global/Constants';

const StyledHeading = styled.h1`
  font-size: ${fontSizes.mlarge};
  font-weight: ${fontWeights.regular};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 1rem;
`;

export default StyledHeading;
