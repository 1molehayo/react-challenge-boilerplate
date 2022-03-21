import React from 'react';
import { GlobalStyles } from 'styles/global';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { colors } from 'styles/global/Constants';
import { AuthProvider } from 'contexts/Auth.context';

import Login from 'pages/login';
import NotFound from 'pages/not-found';
import Payments from 'pages/payments';
import PaymentDetails from 'pages/payment-details';
import RequireAuth from 'RequireAuth';
import RedirectAuth from 'RedirectAuth';

const theme = {
  colors
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <Payments />
                  </RequireAuth>
                }
              />
              <Route
                path="/payment-details/:id"
                element={
                  <RequireAuth>
                    <PaymentDetails />
                  </RequireAuth>
                }
              />
              <Route
                path="/login"
                element={
                  <RedirectAuth>
                    <Login />
                  </RedirectAuth>
                }
              />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </>
    </ThemeProvider>
  );
}

export default App;
