import React from 'react';
import { Link } from 'react-router';

export default () => (
  <ul class="nav navbar-nav">
    <li><Link class="text-muted" to="/gallery">Gallery</Link></li>
    <li><Link class="text-muted" to="/about">About</Link></li>
    <li><Link class="text-muted" to="/contact">Contact</Link></li>
  </ul>
);
