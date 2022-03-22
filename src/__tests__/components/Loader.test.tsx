import React from 'react';
import { render } from '@testing-library/react';
import Loader from 'components/loader';
import { ThemeProvider } from 'styled-components';
import { colors } from 'styles/global/Constants';

const theme = {
  colors
};

describe('When everything is OK in the Loader component', () => {
  test('should render the loader without crashing', () => {
    render(
      <ThemeProvider theme={theme}>
        <Loader />
      </ThemeProvider>
    );
  });
});
