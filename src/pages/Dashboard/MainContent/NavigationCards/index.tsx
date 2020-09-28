import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import { AnimatedContainer, Navigation, AnimatedCard } from './styles';
import { CONTAINER_ANIMATION, CARDS_ANIMATION } from './animations';
import { cardsNavigation, DEFAULT_TRANSITION } from '../../../../constants';
import Button from '../../../../components/Button';

const NavigationCards: React.FC = () => {
  return (
    <AnimatedContainer variants={CONTAINER_ANIMATION}>
      <Navigation>
        {Object.entries(cardsNavigation).map(([key, value]) => (
          <AnimatedCard
            key={`card-${key}`}
            variants={CARDS_ANIMATION}
            transition={DEFAULT_TRANSITION}
            whileHover={{ y: -2, transition: DEFAULT_TRANSITION }}
            whileTap={{ y: 2, transition: DEFAULT_TRANSITION }}
          >
            <div>{value.icon}</div>
            {value.label}
          </AnimatedCard>
        ))}
      </Navigation>
      <Button>
        <FiArrowRight />
      </Button>
    </AnimatedContainer>
  );
};

export default NavigationCards;
