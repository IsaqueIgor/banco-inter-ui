/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import { Route, Redirect, RouteProps } from 'react-router-dom';

import useAuth from '../contexts/auth';

export interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType;
}

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
  const { signed } = useAuth();

  if (!signed) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} render={() => <Component />} />;
};

export default PrivateRoute;
