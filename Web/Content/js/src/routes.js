﻿'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';

import App from './components/app';
import HomePage from './components/homePage';
import AuthorsPage from './components/authorsPage';
import AboutPage from './components/aboutPage';
import NotFoundPage from './components/notFoundPage';

let routes = (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} /> 
        <Route path="authors" component={AuthorsPage} />
        <Route path="about" component={AboutPage} />
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;