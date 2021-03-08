import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import RequestService from '../pages/RequestService';
import { RoutesName } from './RoutesName';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={RoutesName.Home} exact component={Home} />
      <Route path={RoutesName.RequestService} component={RequestService} />
    </Switch>
  );
};

export default Routes;
