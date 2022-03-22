import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PaymentDetails from 'pages/payment-details';
import { ThemeProvider } from 'styled-components';
import { colors } from 'styles/global/Constants';

const theme = {
  colors
};

describe('When everything is OK in the Payment details page', () => {
  test('should render the Payment details page without crashing', () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <PaymentDetails />
        </BrowserRouter>
      </ThemeProvider>
    );
  });
});
