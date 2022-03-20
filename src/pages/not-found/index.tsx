import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'styles/Container.styled';
import StyledParagraph from 'styles/typography/Paragraph.styled';
import StyledButton from 'components/button/Button.styled';
import { StyledNotFound, NotFoundHeader } from './NotFound.styled';
import logo from 'assets/logo.png';
import Footer from 'layouts/footer';

function NotFound() {
  return (
    <>
      <NotFoundHeader>
        <img src={logo} alt="Primer logo" width="70" height="70" />
      </NotFoundHeader>

      <StyledNotFound>
        <section>
          <Container>
            <h1>404</h1>

            <StyledParagraph>Page not found</StyledParagraph>

            <Link to="/">
              <StyledButton title="Take me home">
                <span>Take me home</span>
              </StyledButton>
            </Link>
          </Container>
        </section>
      </StyledNotFound>

      <Footer />
    </>
  );
}

export default NotFound;
