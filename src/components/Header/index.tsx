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
import { User } from './Header';
import Gradient from '../Gradient';

const Header: React.FC = () => {
  const user: User = { name: 'Isaque Igor' };

  return (
    <AnimatedContainer>
      <Wrapper>
        <AnimatedLeftNav>
          <BancoInter />
          Internet Banking
        </AnimatedLeftNav>
        <AnimatedRightNav>
          <Button variant="secondary">Simulador Renda Fixa</Button>
          <AccountDropdown user={user} />
        </AnimatedRightNav>
      </Wrapper>
      <Gradient />
    </AnimatedContainer>
  );
};
export default memo(Header);
