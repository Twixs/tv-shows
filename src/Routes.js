import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, Shows, Episodes } from './pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/shows/:id" component={Shows} />
      <Route path="/episodes/:episodeId" component={Episodes} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
