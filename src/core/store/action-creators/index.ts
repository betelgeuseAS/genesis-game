import * as QuestionActionCreators from './question';
import * as CurrentActionCreators from './current';

export default {
  ...QuestionActionCreators,
  ...CurrentActionCreators,
};
