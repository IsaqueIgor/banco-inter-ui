import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import { AnimatedContainer, HelpButton } from './styles';
import { HELPDESK_ANIMATION } from './animations';
import BabiHelpDesk from '../../../../assets/images/illustrations/babi.png';

const HelpDesk: React.FC = () => {
  return (
    <AnimatedContainer variants={HELPDESK_ANIMATION}>
      <img src={BabiHelpDesk} alt="Eu sou a Babi do Banco Inter" />
      <span>Can I help?</span>
      <HelpButton>
        <FiArrowRight size={24} />
      </HelpButton>
    </AnimatedContainer>
  );
};

export default HelpDesk;
