import { Action } from 'redux';

import { COUNTER_DEC, COUNTER_INC } from './counter.reducer';

export function inc(): Action {
  return {
    type: COUNTER_INC,
  };
}

export function dec(): Action {
  return {
    type: COUNTER_DEC,
  };
}
