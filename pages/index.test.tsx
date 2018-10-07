import { Container } from 'reactstrap';

import { mountPage } from '../test/pageUtils';
import IndexPage from './index';
import css from './index.scss';

describe('route /', () => {
  it('renders the full index page', () => {
    const wrapper = mountPage(IndexPage, '/');

    const root = wrapper.find(Container);
    expect(root.length).toBe(1);
    expect(root.props().className).toBe(css.index);
  });
});
