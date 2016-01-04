'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import Header from './shared/header';


let App = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
               {this.props.children}
            </div>
        );
    }
});

export default App;