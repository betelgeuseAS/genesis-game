import { Dispatch } from 'redux';
import { LayoutAction } from '../actions/layout';
import { LayoutActionTypes } from '../action-types/layout';

export const toggleMenu = (menu: boolean) => {
  return async (dispatch: Dispatch<LayoutAction>) => {
    dispatch({
      type: LayoutActionTypes.TOGGLE_MENU,
      payload: menu,
    });
  };
};
