import React from 'react';
import { Routes as AppRoutes, Route } from 'react-router-dom';
import routes from './static/routes';

function Routes(): JSX.Element {
  return (
    <AppRoutes>
      {routes.map((route) => (
        <Route key={route.name} path={route.path} element={<route.element />} />
      ))}
    </AppRoutes>
  );
}

export default Routes;
