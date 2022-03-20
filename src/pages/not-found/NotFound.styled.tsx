import styled from 'styled-components';
import { fontSizes } from 'styles/global/Constants';
import { device } from 'styles/global/Device';

export const NotFoundHeader = styled.header`
  position: relative;

  img {
    position: absolute;
    left: 36px;
    top: 30px;
  }
`;

export const StyledNotFound = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 70px);
  text-align: center;

  h1 {
    font-size: 15rem;
    line-height: normal;
    letter-spacing: 3px;
    color: ${({ theme }) => theme.colors.black};

    @media ${device.medium} {
      font-size: 22rem;
    }
  }

  p {
    font-size: ${fontSizes.large};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 3rem;
  }

  a {
    text-decoration: none;
  }
`;
