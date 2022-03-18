import React, { ReactNode } from 'react';
import { ContainerWrapper } from '../containers/ContainerWrapper/ContainerWrapper';
import { ContainerQuestion } from '../containers/ContainerQuestion/ContainerQuestion';

export const Questions: React.FC<ReactNode> = () => {
  return (
    <ContainerWrapper justifyContent="justify-content-start">
      <section>
        <ContainerQuestion />
      </section>
    </ContainerWrapper>
  );
};
