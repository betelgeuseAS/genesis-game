import React, { ReactNode }  from 'react';
import './AccentText.sass';

interface IAccentText {
  children?: ReactNode
  className?: string
}

export const AccentText: React.FC<IAccentText> = ({ children, className = 'text-size-big' }) => {
  return (
    <p className={ `text ${ className }` }>{ children }</p>
  );
};
