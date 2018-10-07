import React from 'react';
import { Store } from 'redux';
import { NextContext } from 'next';
import App, { AppComponentContext, AppProps } from 'next/app';
import { DefaultQuery } from 'next/router';
import { isFunction } from 'lodash';

import { initializeStore } from './store';

export interface ReduxAppProps extends AppProps {
  reduxStore: Store;
  initialReduxState: any;
}

interface AppComponentContextRedux<Q extends DefaultQuery = DefaultQuery> extends AppComponentContext {
  ctx: ReduxContext<Q>;
}

interface ReduxContext<Q extends DefaultQuery = DefaultQuery> extends NextContext<Q> {
  reduxStore: Store;
}

const isServer = typeof window === 'undefined';

let currentStore: Store;

export function getOrCreateStore(initialState?: any) {
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

export default (AppComponent: typeof App): React.ComponentClass<AppProps> => {
  return class AppWithRedux extends React.Component<ReduxAppProps> {
    private reduxStore: any;

    public static async getInitialProps(appContext: AppComponentContextRedux) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore();

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (isFunction(AppComponent.getInitialProps)) {
        appProps = await AppComponent.getInitialProps.call(AppComponent, appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      };
    }

    constructor(props: ReduxAppProps) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    public render() {
      return <AppComponent {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};
