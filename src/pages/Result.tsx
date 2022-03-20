import React, { ReactNode } from 'react';
import imageLike from '../assets/images/like.svg';
import { ContainerWrapper } from '../containers/ContainerWrapper/ContainerWrapper';
import { ResponsiveImage } from '../components/ui/ResponsiveImage/ResponsiveImage';
import { AccentText } from '../components/ui/AccentText/AccentText';
import { NavigateButton } from '../components/ui/NavigateButton/NavigateButton';
import { useTypedSelector } from '../core/hooks/useTypedSelector';

export const Result: React.FC<ReactNode> = () => {
  const { questions } = useTypedSelector(state => state.question);
  const { current } = useTypedSelector(state => state.current);

  return (
    <ContainerWrapper>
      <section>
        <ResponsiveImage src={imageLike} alt="Like" />
      </section>

      <section>
        <AccentText className="text-size-medium text-color-muted text-mb-0">Total score:</AccentText>
        <AccentText>${ questions[current] ? new Intl.NumberFormat('en-US').format(questions[current].cost) : 0 } earned</AccentText>
        <NavigateButton to="/questions">Try again</NavigateButton>
      </section>
    </ContainerWrapper>
  );
};
