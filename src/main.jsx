/**
 * @license
 * Copyright daggerok. All rights reserved.
 *
 * Use of this source code is governed by a ISC-style license
 * that can be found in the LICENSE file. at https://github.com/daggerok/angular2/LICENSE
 */
// // we are using webpack instead
// import './vendors';

import React from 'react';
import { render } from 'react-dom';

import Routes from './app/Routes';

render(
  <Routes />,
  document.getElementById('app')
);
