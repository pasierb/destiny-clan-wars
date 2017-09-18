import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import ClanRegister from './components/clans/ClanRegister';
import ClansList from './components/clans/ClansList';

render(
  <Router>
    <Switch>
      <Route path="/">
        <ClansList />
      </Route>
      <Route>
        <ClanRegister />
      </Route>
    </Switch>
  </Router>,
  window.document.getElementById('app'), // eslint-disable-line no-undef
);
