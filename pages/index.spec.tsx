import React from 'react';
import { shallow } from 'enzyme';

import { IndexPage } from './index';
import css from './index.scss';

describe('route /', () => {
  it('renders a simple page', () => {
    const inc = jest.fn();
    const dec = jest.fn();

    const wrapper = shallow(<IndexPage count={0} inc={inc} dec={dec} />);
    expect(wrapper.props().className).toBe(css.index);
  });
});
