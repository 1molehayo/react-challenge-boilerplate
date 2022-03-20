import Logo from 'components/logo';
import React from 'react';
import { Container } from 'styles/Container.styled';
import { StyledHeader, StyledNav, StyledLogout } from './Header.styled';
import useAuth from 'contexts/Auth.context';
import { useNavigate } from 'react-router-dom';

function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <Logo />

          <StyledLogout title="Log out" onClick={handleLogout}>
            Log out
          </StyledLogout>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
}

export default Header;
