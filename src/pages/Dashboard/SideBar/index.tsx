import React from 'react';

import { FiBarChart2 } from 'react-icons/fi';

import { Wrapper, AnimatedContainer, AnimatedAmountInvested } from './styles';
import navigation from './navigation';
import Accordion from './Accordion';
import AccountBalance from './AccountBalance';

const DEFAULT_TRANSITION = { type: 'spring', mass: 1.3 };

const animation = {
  unMounted: { opacity: 0, y: -50 },
  mounted: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, ...DEFAULT_TRANSITION },
  },
};

const SideBar: React.FC = () => {
  return (
    <Wrapper>
      <AnimatedContainer variants={animation}>
        <AccountBalance />
        <AnimatedAmountInvested
          whileHover={{ y: -4, transition: DEFAULT_TRANSITION }}
          whileTap={{ y: 2, transition: DEFAULT_TRANSITION }}
        >
          Show Invested Amount <FiBarChart2 size="1.6rem" />
        </AnimatedAmountInvested>
        {Object.entries(navigation).map(([key, value]) => (
          <Accordion key={key} icon={value.icon} sectionName={key} />
        ))}
      </AnimatedContainer>
    </Wrapper>
  );
};
export default SideBar;
