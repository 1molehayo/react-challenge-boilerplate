import { GlobalStyles } from 'styles/global';
import Login from 'pages/login';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { colors } from 'styles/global/Constants';

const theme = {
  colors
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Login />
      </>
    </ThemeProvider>
  );
}

export default App;
