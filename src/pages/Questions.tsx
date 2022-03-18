import React, { ReactNode } from 'react';
import { ContainerWrapper } from '../containers/ContainerWrapper/ContainerWrapper';
import { QuestionsList } from '../containers/QuestionsList/QuestionsList';

export const Questions: React.FC<ReactNode> = () => {
  return (
    <ContainerWrapper backgroundClass="bg-dark-5">
      <section>
        <QuestionsList />
      </section>
    </ContainerWrapper>
  );
};
