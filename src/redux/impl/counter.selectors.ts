import { AppState } from './reducers';

export function selectCount(state: AppState) {
  return state.counter && state.counter.get('count');
}
