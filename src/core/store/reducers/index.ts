import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import currentReducer from './currentReducer';
import layoutReducer from './layoutReducer';

export const rootReducer = combineReducers({
  question: questionReducer,
  current: currentReducer,
  layout: layoutReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
