import React, { ReactNode }  from 'react';
import './AccentText.sass';

interface IAccentText {
  children?: ReactNode
  className?: string
}

export const AccentText: React.FC<IAccentText> = ({ children, className }) => {
  return (
    <p className={ `text ${ className ? className : 'text-size-big' }` }>{ children }</p>
  );
};
