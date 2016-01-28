'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { Router, browserHistory } from 'react-router';
import Routes from './routes';
import InitializeActions from './actions/initializeActions';

import { appStore } from './stores/authorStore';

InitializeActions.initApp();

let store = createStore(appStore);
let appRootElement = document.getElementById('app');

ReactDOM.render(
    <Provider store={ store } >
        <Router history={ browserHistory }>
            {Routes}
        </Router>
    </Provider>,
    appRootElement);