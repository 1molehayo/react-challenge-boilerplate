import React from 'react';
import StyledLogo from './Logo.styled';
import logo from 'assets/logo.png';

const Logo = () => {
  return (
    <StyledLogo href="/">
      <img src={logo} alt="Primer logo" width="50" height="50" />
      <span>Primer</span>
    </StyledLogo>
  );
};

export default Logo;
