import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Head from 'next/head';
import { Container, Row, Col, Button } from 'reactstrap';

import { AppState } from '../src/redux/impl/reducers';
import { selectCount } from '../src/redux/impl/counter.selectors';
import * as counterActions from '../src/redux/impl/counter.actions';
import css from './index.scss';

interface IndexProps {
  count: number;
  inc: () => void;
  dec: () => void;
}

export const IndexPage = (props: IndexProps) => {
  const { count, inc, dec } = props;

  return (
    <Container className={css.index}>
      <Head>
        <title>Welcome</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
      </Head>
      <Row>
        This is the index page
      </Row>
      <Row>
        <Col>Count is</Col>
        <Col>{count}</Col>
        <Col><Button onClick={dec}>-</Button></Col>
        <Col><Button onClick={inc}>+</Button></Col>
      </Row>
    </Container>
  );
};

export default connect(
  (state: AppState) => ({
    count: selectCount(state),
  }),
  dispatch => bindActionCreators(counterActions, dispatch),
)(IndexPage);
