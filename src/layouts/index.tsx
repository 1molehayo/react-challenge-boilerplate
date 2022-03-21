import React from 'react';
import { Page } from 'styles/Page.styled';
import Footer from './footer';
import Header from './header';

interface IProps {
  children?: React.ReactChild | React.ReactChildren;
}

export default function Layout(WrappedComponent: React.FC) {
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
