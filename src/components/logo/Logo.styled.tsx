import styled from 'styled-components';

const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};

  span {
    margin-left: 0.5rem;
  }
`;

export default StyledLogo;
