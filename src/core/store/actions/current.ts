import { CurrentActionTypes } from '../action-types/current';

interface ChangeCurrentQuestionAction {
  type: CurrentActionTypes.CHANGE_CURRENT_QUESTIONS
  payload: number
}

export type CurrentAction = ChangeCurrentQuestionAction;
