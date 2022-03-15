import React, { useState } from 'react';
import { Container } from 'styles/Container.styled';
import {
  LoginForm,
  LoginBody,
  LoginHeader,
  LoginWrapper
} from './Login.styled';
import StyledHeading from 'styles/typography/Heading.styled';
import InputField from 'components/input-field';
import Button from 'components/button';
import Footer from 'layouts/footer';
import logo from 'assets/logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <LoginWrapper>
      <LoginHeader>
        <img src={logo} alt="Primer logo" width="70" height="70" />
      </LoginHeader>

      <LoginBody>
        <section>
          <Container>
            <LoginForm>
              <StyledHeading>Welcome back</StyledHeading>

              <form onSubmit={handleSubmit}>
                <InputField
                  name="email"
                  type="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <InputField
                  name="password"
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="submit">
                  <span>Log in</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Button>
              </form>
            </LoginForm>
          </Container>
        </section>
      </LoginBody>

      <Footer />
    </LoginWrapper>
  );
}

export default Login;
