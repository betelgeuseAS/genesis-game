import React, { ReactNode } from 'react';
import imageLike from '../assets/images/like.svg';
import { ContainerWrapper } from '../containers/ContainerWrapper/ContainerWrapper';
import { ResponsiveImage } from '../components/ui/ResponsiveImage/ResponsiveImage';
import { AccentText } from '../components/ui/AccentText/AccentText';
import { NavigateButton } from '../components/ui/NavigateButton/NavigateButton';

export const Start: React.FC<ReactNode> = () => {
  return (
    <ContainerWrapper backgroundClass="bg-gradient">
      <section>
        <ResponsiveImage src={imageLike} alt="Like" />
      </section>

      <section>
        <AccentText>Who wants to be a millionaire?</AccentText>
        <NavigateButton to="/questions">Start</NavigateButton>
      </section>
    </ContainerWrapper>
  );
};
