import { CurrentActionTypes, CurrentState } from '../action-types/current';
import { CurrentAction } from '../actions/current';

const initialState: CurrentState = {
  current: 0,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const reducer = (state: object = initialState, action: CurrentAction): CurrentState => {
  switch (action.type) {
    case CurrentActionTypes.CHANGE_CURRENT_QUESTIONS:
      return { current: action.payload };
    default:
      return <CurrentState>state;
  }
};

export default reducer;
