'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';
import InitializeActions from './actions/initializeActions';

InitializeActions.initApp();

let appRootElement = document.getElementById('app');
ReactDOM.render(
        <Router history={ browserHistory }>
            {Routes}
        </Router>
    ,
    appRootElement);