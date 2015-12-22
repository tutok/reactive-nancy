'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import Routes from './routes';
import createHistory from 'history/lib/createHashHistory';


ReactDOM.render(<Router>{Routes}</Router>, document.getElementById('app'));
