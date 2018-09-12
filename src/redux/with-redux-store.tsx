import React from 'react';
import { Store } from 'redux';
import { NextContext, NextSFC } from 'next';

import { AppComponentContext } from '../../node_modules/@types/next/app';
import { initializeStore } from './store';

export interface AppProps {
  reduxStore: Store;
  initialReduxState: any;
}

interface AppComponentContextRedux<Q = any> extends AppComponentContext<Q> {
  ctx: ReduxContext<Q>;
}

interface ReduxContext<Q> extends NextContext<Q> {
  reduxStore: Store;
}

const isServer = typeof window === 'undefined';

let currentStore: Store;

function getOrCreateStore(initialState?: any) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client
  if (!currentStore) {
    currentStore = initializeStore(initialState);
  }
  return currentStore;
}

export default (App: NextSFC<AppProps>) => {
  return class AppWithRedux extends React.Component<AppProps> {
    private reduxStore: any;

    public static async getInitialProps(appContext: AppComponentContextRedux) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore();

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps.call(App, appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      };
    }

    constructor(props: AppProps) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    public render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};
