import { fromJS, Iterable, Record } from 'immutable';
import { Action } from 'redux';

export class CounterRecord extends Record({
  count: 0,
}) {}

export const COUNTER_INC = 'COUNTER_INC';
export const COUNTER_DEC = 'COUNTER_DEC';

const initialState = new CounterRecord();

export default function counter(state = initialState, action: Action) {
  const nextState = Iterable.isIterable(state) ? state : fromJS(state);

  switch (action.type) {
    case COUNTER_INC:
      return nextState.update('count', (count: number) => count + 1);
    case COUNTER_DEC:
      return nextState.update('count', (count: number) => count - 1);
  }

  return nextState;
}
