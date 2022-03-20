import { Dispatch } from 'redux';
import { CurrentAction } from '../actions/current';
import { CurrentActionTypes } from '../action-types/current';

export const changeCurrentQuestion = (current: number) => {
  return async (dispatch: Dispatch<CurrentAction>) => {
    dispatch({
      type: CurrentActionTypes.CHANGE_CURRENT_QUESTIONS,
      payload: current,
    });
  };
};
