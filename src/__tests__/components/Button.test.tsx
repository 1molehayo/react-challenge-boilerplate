import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from 'components/button';
import { ThemeProvider } from 'styled-components';
import { colors } from 'styles/global/Constants';

const theme = {
  colors
};

describe('When everything is OK in the button component', () => {
  test('should render the button component without crashing', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button />
      </ThemeProvider>
    );
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <Button onClick={handleClick}>Click Me</Button>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText(/click me/i));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
