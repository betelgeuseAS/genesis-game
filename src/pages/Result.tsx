import React, { ReactNode } from 'react';
import imageLike from '../assets/images/like.svg';
import { ContainerWrapper } from '../containers/ContainerWrapper/ContainerWrapper';
import { ResponsiveImage } from '../components/ui/ResponsiveImage/ResponsiveImage';
import { AccentText } from '../components/ui/AccentText/AccentText';
import { NavigateButton } from '../components/ui/NavigateButton/NavigateButton';

export const Result: React.FC<ReactNode> = () => {
  return (
    <ContainerWrapper backgroundClass="bg-dark-5">
      <section>
        <ResponsiveImage src={imageLike} alt="Like" />
      </section>

      <section>
        <AccentText>{''} earned</AccentText>
        <NavigateButton to="/questions">Try again</NavigateButton>
      </section>
    </ContainerWrapper>
  );
};
