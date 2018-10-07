import React from 'react';
import { mount } from 'enzyme';
// @ts-ignore
import { createRouter } from 'next/router';

import App from '../pages/_app';

/**
 * Mount the component as a full page including redux store
 * @param component
 * @param path
 * @param props
 */
export function mountPage(component: React.ComponentType, path: string = '/', props: any = {}) {
  const router = createRouter(path);

  const wrapper = mount(
    <App Component={component} pageProps={props} router={router} />
  );
  return wrapper;
}
