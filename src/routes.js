import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import List from './components/List';
import About from './components/About';

const routes = (
  <App>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/list' component={List} />
        <Route exact path='/about' component={About} />
    </Switch>
  </App>
)

export { routes };