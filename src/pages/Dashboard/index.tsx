import React from 'react';

import { Container, Wrapper } from './styles';
import { Header, Footer } from '../../components';
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
      <Footer />
    </>
  );
};
export default Dashboard;
