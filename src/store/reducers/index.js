import { combineReducers } from 'redux';
import todos from './todos';

const reducerApp = combineReducers({
  todos
});

export default reducerApp;