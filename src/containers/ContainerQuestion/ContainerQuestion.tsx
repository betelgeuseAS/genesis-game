import React, { ReactNode, useEffect }  from 'react';
import './ContainerQuestion.sass';
import imageMenuOpen from '../../assets/icons/menu-open.svg';
import imageMenuClose from '../../assets/icons/menu-close.svg';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import { useActions } from '../../core/hooks/useActions';
import { AccentText } from '../../components/ui/AccentText/AccentText';
import { CurrentQuestion } from '../../components/ordinary/CurrentQuestion/CurrentQuestion';
import { ProgressCost } from '../../components/simple/ProgressCost/ProgressCost';

export const ContainerQuestion: React.FC<ReactNode> = () => {
  const { loading, questions, error } = useTypedSelector(state => state.question);
  const { current } = useTypedSelector(state => state.current);
  const { menuOpen } = useTypedSelector(state => state.layout);
  const { fetchQuestions, toggleMenu } = useActions();
  const list = questions.map(item => {
    return item.cost;
  }).reverse();

  useEffect(() => {
    fetchQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const menuToggleHandler = () => {
    toggleMenu(!menuOpen);
  };

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
          <div className="menu-wrapper" onClick={ menuToggleHandler }>
              <img src={ menuOpen ? imageMenuClose : imageMenuOpen } alt="Menu" className="menu"/>
          </div>
            
          <CurrentQuestion question={ questions[current] } current={ current } length={ questions.length } />
          <ProgressCost current={ current } list={ list } openMenu={ menuOpen } />
        </div>
      }
    </>
  );
};
