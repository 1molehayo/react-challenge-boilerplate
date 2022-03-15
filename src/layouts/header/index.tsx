import Logo from 'components/logo';
import React from 'react';
import { Container } from 'styles/Container.styled';
import StyledHeader from './Header.styled';

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Logo />
      </Container>
    </StyledHeader>
  );
}

export default Header;
