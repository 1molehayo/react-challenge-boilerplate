import styled from 'styled-components';
import { device } from './global/Device';

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto;

  @media ${device.small} {
    max-width: 540px;
  }

  @media ${device.medium} {
    max-width: 800px;
  }

  @media ${device.large} {
    max-width: 1140px;
  }

  @media ${device.xlarge} {
    max-width: 1400px;
  }
`;
