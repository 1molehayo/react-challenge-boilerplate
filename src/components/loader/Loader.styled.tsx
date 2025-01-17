import { lighten } from 'polished';
import styled from 'styled-components';

const StyledLoader = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 500px;

  ${({ theme }) =>
    theme && {
      background: lighten(0.2, theme.colors.white)
    }};
`;

export default StyledLoader;
