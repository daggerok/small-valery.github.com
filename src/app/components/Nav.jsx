import React from 'react';

import './Nav/styles.styl';

import Brand from './Nav/Brand';
import Links from './Nav/Links';
import Header from './Nav/Header';

export default () => (
  <nav class="container-fluid text-center text-muted">
    <Header/>
    <Brand />
    <Links />
  </nav>
);
