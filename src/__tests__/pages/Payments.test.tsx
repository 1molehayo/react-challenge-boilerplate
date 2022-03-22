import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Payments from 'pages/payments';
import { colors } from 'styles/global/Constants';

const theme = {
  colors
};

describe('When everything is OK in the Payment list page', () => {
  test('should render the Payment list page without crashing', () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Payments />
        </BrowserRouter>
      </ThemeProvider>
    );
  });

  // test('page title should be page', () => {
  //   const titleElement = screen.find('heading');
  //   expect(titleElement).toBeInTheDocument();
  // });
});
