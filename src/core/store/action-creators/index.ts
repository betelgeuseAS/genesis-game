import * as QuestionActionCreators from './question';
import * as CurrentActionCreators from './current';
import * as LayoutActionCreators from './layout';

export default {
  ...QuestionActionCreators,
  ...CurrentActionCreators,
  ...LayoutActionCreators,
};
