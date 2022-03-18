import React, { ReactNode }  from 'react';
import './ContainerWrapper.sass';

interface IContainerWrapper {
  children?: ReactNode;
  backgroundClass?: string;
  justifyContent?: string
}

export const ContainerWrapper: React.FC<IContainerWrapper> = ({ children, backgroundClass = 'bg-dark-5', justifyContent = 'justify-content-center' }) => {
  return (
    <div className={ `container ${ backgroundClass }` }>
      <div className={ `container-item ${ justifyContent }` }>
        { children }
      </div>
    </div>
  );
};
