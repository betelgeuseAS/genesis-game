import React, { ReactNode }  from 'react';
import './ContainerWrapper.sass';

interface IContainerWrapper {
  children?: ReactNode
  backgroundClass?: string
}

export const ContainerWrapper: React.FC<IContainerWrapper> = ({ children, backgroundClass }) => {
  return (
    <div className={ `container ${backgroundClass}` }>
      <div className="container-item">
        { children }
      </div>
    </div>
  );
};
