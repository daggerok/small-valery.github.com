import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import About from './components/About';

export default () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Gallery}/>
      <Route path='gallery' component={Gallery}/>
      <Route path='contact' component={Contact}/>
      <Route path='about' component={About}/>
      <Route path='*' component={Gallery}/>
    </Route>
  </Router>
);
