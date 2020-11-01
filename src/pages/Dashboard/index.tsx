import React from 'react';

import { Container, Wrapper } from './styles';
import { Header, Footer } from '../../components';
import SideBar from './SideBar';
import MainContent from './MainContent';
import { DASHBOARD_ANIMATION } from './animations';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper
          variants={DASHBOARD_ANIMATION}
          initial="unMounted"
          animate="mounted"
          exit="unMounted"
          transition={{ duration: 1.5 }}
        >
          <SideBar />
          <MainContent />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};
export default Dashboard;
