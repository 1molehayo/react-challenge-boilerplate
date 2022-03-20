import styled from 'styled-components';
import { fontSizes, fontWeights } from 'styles/global/Constants';

const StyledLink = styled.a`
  display: inline-block;
  color: inherit;
  -webkit-font-smoothing: antialiased;
  text-decoration: none;
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizes.regular};
  letter-spacing: 0.2px;
  line-height: 1.6;
  cursor: pointer;
  text-decoration: none;
`;

export default StyledLink;
