import { combineReducers } from 'redux';
import todos from './todos';
import counter from './counter';

const reducerApp = combineReducers({
  todos,
  counter
});

export default reducerApp;