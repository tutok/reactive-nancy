'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Link, Redirect } from 'react-router';
import App from './components/app';
import HomePage from './components/homePage';
import AuthorsPage from './components/authorsPage';
import ManageAuthorPage from './components/manageAuthorPage';
import AboutPage from './components/aboutPage';
import NotFoundPage from './components/notFoundPage';



function onEnter(location, transition, callback) {
    if (confirm('Are you shure?') == false) {
        //transition.to('/about');
    } else {
       // callback();
    }
}

function onLeave() {
    
}


let Routes = (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} /> 
        <Route path="authors" component={AuthorsPage} />
        <Route path="author" component={ManageAuthorPage} />
        <Route path="about" component={AboutPage} onEnter={onEnter} onLeave={onLeave}/>
        <Redirect from="about-us" to="about" />
        <Redirect from="about/*" to="about" />
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default Routes;