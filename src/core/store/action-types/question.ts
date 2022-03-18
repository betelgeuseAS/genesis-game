export interface QuestionState {
  loading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  questions: any[];
  error: null | string;
}

export enum QuestionActionTypes {
  FETCH_QUESTIONS = 'FETCH_QUESTIONS',
  FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS',
  FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR',
}
