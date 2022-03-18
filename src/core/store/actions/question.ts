import { QuestionActionTypes } from '../action-types/question';

interface FetchQuestionsAction {
  type: QuestionActionTypes.FETCH_QUESTIONS
}

interface FetchQuestionsSuccessAction {
  type: QuestionActionTypes.FETCH_QUESTIONS_SUCCESS,
  payload: never[]
}

interface FetchQuestionsErrorAction {
  type: QuestionActionTypes.FETCH_QUESTIONS_ERROR
  payload: string
}

export type QuestionAction = FetchQuestionsAction | FetchQuestionsSuccessAction | FetchQuestionsErrorAction;
