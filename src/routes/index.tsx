import React from 'react';

import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <AnimatePresence exitBeforeEnter={pathname === '/dashboard'}>
      <Switch>
        <Route path="/dashboard" component={Dashboard} isPrivate />

        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
