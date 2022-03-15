import React from 'react';
import { Page } from 'styles/Page.styled';
import Footer from './footer';
import Header from './header';

interface IProps {
  children?: React.ReactNode;
}

export default function Layout(WrappedComponent: React.FC) {
  // eslint-disable-next-line react/display-name
  return (props: JSX.IntrinsicAttributes & IProps) => {
    return (
      <>
        <Header />

        <Page>
          <WrappedComponent {...props} />
        </Page>

        <Footer />
      </>
    );
  };
}
