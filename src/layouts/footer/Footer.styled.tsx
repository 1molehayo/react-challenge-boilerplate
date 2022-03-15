import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  color: ${({ theme }) => theme.colors.dark};

  a {
    font-weight: 600;
  }
`;

export default StyledFooter;
