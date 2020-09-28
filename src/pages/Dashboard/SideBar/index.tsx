import React from 'react';

import { FiBarChart2 } from 'react-icons/fi';

import { i18n } from '../../../translate/i18n';
import { Wrapper, AnimatedContainer, AnimatedAmountInvested } from './styles';
import { sideBarNavigation } from '../../../constants';
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
          {i18n.t('investments.showInvestedAmount')}{' '}
          <FiBarChart2 size="1.6rem" />
        </AnimatedAmountInvested>
        {Object.entries(sideBarNavigation).map(([key, value]) => (
          <Accordion key={key} icon={value.icon} sectionName={value.label} />
        ))}
      </AnimatedContainer>
    </Wrapper>
  );
};
export default SideBar;
