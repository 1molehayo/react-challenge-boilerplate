import styled from 'styled-components';
import { fontSizes, fontWeights } from 'styles/global/Constants';
import { lighten } from 'polished';

const StyledStatus = styled.span`
  display: inline-block;
  font-size: ${fontSizes.xxsmall};
  font-weight: ${fontWeights.regular};
  padding: 5px 10px;
  border-radius: 5px;

  ${(props) =>
    props.color && {
      background: lighten(0.5, props.color),
      color: props.color
    }}
`;

export default StyledStatus;
