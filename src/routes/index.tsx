import React from 'react';

import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Dashboard from '../pages/Dashboard';
import Welcome from '../pages/Welcome';
import PrivateRoute from './PrivateRoute';

const Routes: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <AnimatePresence exitBeforeEnter={pathname === '/dashboard'}>
      <Switch location={location} key={pathname}>
        <Route path="/" exact component={Welcome} />
        <PrivateRoute path="/dashboard" component={Dashboard} />

        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
