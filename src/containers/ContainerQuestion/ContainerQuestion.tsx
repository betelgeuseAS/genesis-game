import React, { ReactNode, useEffect }  from 'react';
import './ContainerQuestion.sass';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import { useActions } from '../../core/hooks/useActions';
import { AccentText } from '../../components/ui/AccentText/AccentText';
import { CurrentQuestion } from '../../components/ordinary/CurrentQuestion/CurrentQuestion';

export const ContainerQuestion: React.FC<ReactNode> = () => {
  const { loading, questions, error } = useTypedSelector(state => state.question);
  const { current } = useTypedSelector(state => state.current);
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
    <>
      { questions[current] &&
        <div className="container-question">
          <CurrentQuestion question={ questions[current] } current={ current } length={ questions.length } />
        </div>
      }
    </>
  );
};
