/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom';
import NavBar from './components/App/NavBar';
import routes from './routes';

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              key={route.name}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                <route.component {...props} {...route.props} />
              )}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
