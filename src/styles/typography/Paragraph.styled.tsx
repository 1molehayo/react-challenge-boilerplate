import styled from 'styled-components';
import { fontSizes, fontWeights } from 'styles/global/Constants';

const StyledParagraph = styled.p`
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizes.regular};
  letter-spacing: 0.2px;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export default StyledParagraph;
