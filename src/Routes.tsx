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

const handleLink = (pageName: string): number => {
  const pages = ['', 'projects', 'skills', 'works', 'contact'];

  return pages.indexOf(pageName);
};

const Routes = (): JSX.Element => {
  const [selectedLink, setSelectedLink] = useState(
    handleLink(
      window.location.pathname.substr(1, window.location.pathname.length),
    ),
  );

  return (
    <BrowserRouter>
      <NavBar selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
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
