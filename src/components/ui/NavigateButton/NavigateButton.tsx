import React, { ReactNode }  from 'react';
import './NavigateButton.sass';
import { Link } from 'react-router-dom';

interface INavigateButton {
  children?: ReactNode
  to: string
}

export const NavigateButton: React.FC<INavigateButton> = ({ children, to }) => {
  return (
    <Link to={to} className="navigate-button">{ children }</Link>
  );
};
