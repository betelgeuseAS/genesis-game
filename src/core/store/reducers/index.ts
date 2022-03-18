import { combineReducers } from 'redux';
import questionReducer from './questionReducer';

export const rootReducer = combineReducers({
  question: questionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
