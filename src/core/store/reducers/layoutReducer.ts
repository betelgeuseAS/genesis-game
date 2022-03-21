import { LayoutActionTypes, LayoutState } from '../action-types/layout';
import { LayoutAction } from '../actions/layout';

const initialState: LayoutState = {
  menuOpen: false,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const reducer = (state: object = initialState, action: LayoutAction): LayoutState => {
  switch (action.type) {
    case LayoutActionTypes.TOGGLE_MENU:
      return { menuOpen: action.payload };
    default:
      return <LayoutState>state;
  }
};

export default reducer;
