import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import currentReducer from './currentReducer';

export const rootReducer = combineReducers({
  question: questionReducer,
  current: currentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
