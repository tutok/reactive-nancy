'use strict';

import React from 'react';
import { Router, Route, DefaultRoute, Link } from 'react-router';

import App from './app.jsx';
import HomePage from './components/homePage.jsx';
import AuthorsPage from './components/authorsPage.jsx';

let routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={HomePage} />
        <Route name="authors" handler={AuthorsPage} />
        <Route name="about" handler={AboutPage} />
    </Route>
);

export default routes;