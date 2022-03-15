import React from 'react';
import { Container } from 'styles/Container.styled';
import StyledFooter from './Footer.styled';

function Footer() {
  const getYear = (): number => {
    return new Date().getFullYear();
  };

  return (
    <StyledFooter>
      <Container>
        <p>© {getYear()} Primer.io - All rights reserved.</p>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
