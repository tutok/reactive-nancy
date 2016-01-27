'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import Header from './shared/header';


class App extends React.Component{
    render() {
        return (
            <div>
                <Header />
               {this.props.children}
            </div>
        );
    }
};

export default App;