import React, { ReactNode, useEffect }  from 'react';
import './QuestionsList.sass';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import { useActions } from '../../core/hooks/useActions';

export const QuestionsList: React.FC<ReactNode> = () => {
  const { loading, questions, error } = useTypedSelector(state => state.question);
  const { fetchQuestions } = useActions();

  useEffect(() => {
    fetchQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Loading error.</h1>;
  }

  return (
    <div >
      {
        questions.map(question => <div key={ question.id }>{ question.question }</div>)
      }
    </div>
  );
};
