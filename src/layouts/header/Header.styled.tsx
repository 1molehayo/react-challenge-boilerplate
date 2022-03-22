import styled from 'styled-components';
import { fontSizes, fontWeights } from 'styles/global/Constants';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavInner = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.div`
  margin-right: 2rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    transition: 0.3s color ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: underline;
    }
  }
`;

export const StyledLogout = styled.button`
  background-color: transparent;
  font-size: ${fontSizes.regular};
  font-weight: ${fontWeights.regular};
  color: ${({ theme }) => theme.colors.primary};
  outline: none;
  border: 0;
  cursor: pointer;
  transition: text-decoration 0.4s ease;

  &:hover {
    text-decoration: underline;
  }
`;
