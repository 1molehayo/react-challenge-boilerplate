import Logo from 'components/logo';
import React from 'react';
import { Container } from 'styles/Container.styled';
import {
  StyledHeader,
  StyledNav,
  StyledLogout,
  NavLink,
  NavInner
} from './Header.styled';
import useAuth from 'contexts/Auth.context';
import { Link, useNavigate } from 'react-router-dom';

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

          <NavInner>
            <NavLink>
              <Link to="/profile">Profile</Link>
            </NavLink>

            <StyledLogout title="Log out" onClick={handleLogout}>
              Log out
            </StyledLogout>
          </NavInner>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
}

export default Header;
