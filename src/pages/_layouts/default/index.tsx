import React, { PropsWithChildren } from 'react';

import { Header, Footer } from '../../../components';

const DefaultLayout = ({
  children,
}: PropsWithChildren<unknown>): React.ReactNode => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
