import { QuestionActionTypes, QuestionState } from '../action-types/question';
import { QuestionAction } from '../actions/question';

const initialState: QuestionState = {
  loading: false,
  questions: [],
  error: null,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const reducer = (state: object = initialState, action: QuestionAction): QuestionState => {
  switch (action.type) {
    case QuestionActionTypes.FETCH_QUESTIONS:
      return { loading: true, questions: [], error: null };
    case QuestionActionTypes.FETCH_QUESTIONS_SUCCESS:
      return { loading: false, questions: action.payload, error: null };
    case QuestionActionTypes.FETCH_QUESTIONS_ERROR:
      return { loading: false, questions: [], error: action.payload };
    default:
      return <QuestionState>state;
  }
};

export default reducer;
