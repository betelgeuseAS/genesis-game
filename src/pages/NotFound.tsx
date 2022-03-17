import React, { ReactNode } from 'react';
import { ContainerWrapper } from '../containers/ContainerWrapper/ContainerWrapper';
import { AccentText } from '../components/ui/AccentText/AccentText';
import { NavigateButton } from '../components/ui/NavigateButton/NavigateButton';


export const NotFound: React.FC<ReactNode> = () => {
  return (
    <ContainerWrapper backgroundClass="bg-dark-5">
      <section>
        <AccentText>404 - Not Found!</AccentText>
        <NavigateButton to="/">Go to Start</NavigateButton>
      </section>
    </ContainerWrapper>
  );
};
