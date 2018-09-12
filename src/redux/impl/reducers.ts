import counter, { CounterRecord } from './counter.reducer';

export interface AppState {
  counter: CounterRecord;
}

export {
  counter,
};
