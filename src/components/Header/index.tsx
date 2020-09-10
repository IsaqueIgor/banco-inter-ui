import React from 'react';

import {
  AnimatedContainer,
  Wrapper,
  AnimatedLeftNav,
  AnimatedRightNav,
} from './styles';
import { BancoInter } from '../../assets/images';
import Button from '../Button';

const Header: React.FC = () => {
  return (
    <AnimatedContainer>
      <Wrapper>
        <AnimatedLeftNav>
          <BancoInter />
          Internet Banking
        </AnimatedLeftNav>
        <AnimatedRightNav>
          <Button variant="secondary">Simulador Renda Fixa</Button>
        </AnimatedRightNav>
      </Wrapper>
    </AnimatedContainer>
  );
};
export default Header;
