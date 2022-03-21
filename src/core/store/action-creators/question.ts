import { Dispatch } from 'redux';
import axios from 'axios';
import { QuestionAction } from '../actions/question';
import { QuestionActionTypes } from '../action-types/question';

export const fetchQuestions = () => {
  return async (dispatch: Dispatch<QuestionAction>) => {
    dispatch({ type: QuestionActionTypes.FETCH_QUESTIONS });

    await axios.get('https://api.npoint.io/df8a1cc860dee09f3c62')
      .then(function (response) {
        dispatch({
          type: QuestionActionTypes.FETCH_QUESTIONS_SUCCESS,
          payload: response.data,
        });
      })
      .catch(function (error) {
        dispatch({
          type: QuestionActionTypes.FETCH_QUESTIONS_ERROR,
          payload: `${error}`,
        });
      });
  };
};
