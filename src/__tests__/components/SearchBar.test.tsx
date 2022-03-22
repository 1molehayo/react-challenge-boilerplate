import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from 'components/search-bar';
import { ThemeProvider } from 'styled-components';
import { colors } from 'styles/global/Constants';

const onFilter = jest.fn();
const toggleFilter = jest.fn();

const theme = {
  colors
};

const RenderComponent = () => (
  <ThemeProvider theme={theme}>
    <SearchBar
      onFilter={onFilter}
      showFilter={false}
      toggleFilter={toggleFilter}
    />
  </ThemeProvider>
);

const setup = (text: string) => {
  const utils = render(<RenderComponent />);

  const input = utils.getByLabelText(text) as HTMLInputElement;

  return {
    input,
    ...utils
  };
};

describe('When everything is OK in the Searchbar component', () => {
  test('should render the searchbar without crashing', () => {
    render(<RenderComponent />);
  });

  test('should be empty input field by default', () => {
    const { input } = setup('search-input');
    expect(input.value).toBe('');
  });

  test('should change input field value when text is inputted', async () => {
    const { input } = setup('search-input');

    await userEvent.type(input, 'Jack');
    expect(input.value).toBe('Jack');
  });

  test('should change input field value when text is inputted', async () => {
    const { input } = setup('search-input');

    await userEvent.type(input, 'Jack');
    expect(input.value).toBe('Jack');
  });
});
