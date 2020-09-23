import React from 'react';

import { Container, Wrapper } from './styles';
import Header from '../../components/Header';
import SideBar from './SideBar';
import MainContent from './MainContent';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <SideBar />
          <MainContent />
        </Wrapper>
      </Container>
    </>
  );
};
export default Dashboard;
