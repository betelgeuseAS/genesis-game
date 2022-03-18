import React, { ReactNode, useEffect }  from 'react';
import './ContainerQuestion.sass';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import { useActions } from '../../core/hooks/useActions';
import { AccentText } from '../../components/ui/AccentText/AccentText';

export const ContainerQuestion: React.FC<ReactNode> = () => {
  const { loading, questions, error } = useTypedSelector(state => state.question);
  const { fetchQuestions } = useActions();

  useEffect(() => {
    fetchQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <AccentText>Loading...</AccentText>;
  }

  if (error) {
    return <AccentText>Loading error.</AccentText>;
  }

  return (
    <div className="container-question">
      {
        questions.map(question => <div key={ question.id }>{ question.title }</div>)
      }
    </div>
  );
};
