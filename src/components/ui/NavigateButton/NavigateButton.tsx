import React, { ReactNode }  from 'react';
import './NavigateButton.sass';
import { Link } from 'react-router-dom';
import { useActions } from '../../../core/hooks/useActions';

interface INavigateButton {
  children?: ReactNode
  to: string
}

export const NavigateButton: React.FC<INavigateButton> = ({ children, to }) => {
  const { changeCurrentQuestion } = useActions();
  
  return (
    <Link to={to} onClick={ () => changeCurrentQuestion(0) } className="navigate-button">{ children }</Link>
  );
};
