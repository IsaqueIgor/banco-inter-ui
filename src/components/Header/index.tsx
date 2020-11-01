import React, { memo } from 'react';

import {
  AnimatedContainer,
  Wrapper,
  AnimatedLeftNav,
  AnimatedRightNav,
} from './styles';
import { BancoInter } from '../../assets/images';
import Button from '../Button';
import AccountDropdown from './AccountDropdown';
import useAuth from '../../contexts/auth';
import Gradient from './Gradient';
import { CONTAINER_ANIMATION, NAVS_ANIMATION } from './animations';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <AnimatedContainer
      variants={CONTAINER_ANIMATION}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
    >
      <Wrapper>
        <AnimatedLeftNav variants={NAVS_ANIMATION}>
          <BancoInter />
          Internet Banking
        </AnimatedLeftNav>
        <AnimatedRightNav variants={NAVS_ANIMATION}>
          <Button variant="secondary">Simulador Renda Fixa</Button>
          <AccountDropdown />
        </AnimatedRightNav>
      </Wrapper>
      <Gradient />
    </AnimatedContainer>
  );
};
export default memo(Header);
