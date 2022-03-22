import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from 'pages/not-found';
import { colors } from 'styles/global/Constants';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors
};

const RenderComponent = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  </ThemeProvider>
);

const setup = (text: string) => {
  const utils = render(<RenderComponent />);

  const input = utils.getByText(text);
  return {
    input,
    ...utils
  };
};

describe('When everything is OK in the Error page', () => {
  test('should render the error page without crashing', () => {
    render(<RenderComponent />);
  });

  test('should show 404 text', () => {
    const { input } = setup('404');

    expect(input).toBeInTheDocument();
  });
});
