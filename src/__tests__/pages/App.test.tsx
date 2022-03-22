import React from 'react';
import { render } from '@testing-library/react';
import App from 'App';
import { ThemeProvider } from 'styled-components';
import { colors } from 'styles/global/Constants';

const theme = {
  colors
};

test('renders app without crashing', () => {
  render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
});
