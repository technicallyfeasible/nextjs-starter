import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import '../src/scss/main.scss';
import withReduxStore, { AppProps } from '../src/redux/with-redux-store';

class MyApp extends App<AppProps> {
  public render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
