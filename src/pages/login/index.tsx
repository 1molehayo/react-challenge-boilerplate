import React, { FormEvent, useState } from 'react';
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
import useAuth from 'contexts/Auth.context';
import { notify } from 'utility/toaster';
import { handleError } from 'services/axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await login(email, password);
    } catch (err) {
      const errorMessage = handleError(err);

      notify({
        type: 'error',
        message: errorMessage
      });

      setLoading(false);
    }
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

              <form onSubmit={handleLogin}>
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

                <Button type="submit" disabled={loading} title="Log in">
                  {loading && <span>loading...</span>}

                  {!loading && (
                    <>
                      <span>Log in</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </>
                  )}
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
