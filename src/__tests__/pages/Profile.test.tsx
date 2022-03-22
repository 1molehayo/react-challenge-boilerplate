import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Profile from 'pages/profile';
import { colors } from 'styles/global/Constants';

const theme = {
  colors
};

describe('When everything is OK in the Profile page', () => {
  test('should render the profile page without crashing', () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </ThemeProvider>
    );
  });
});
