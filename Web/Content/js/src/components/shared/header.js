'use strict';

import React from 'react';
import { Link } from 'react-router';


let Header = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <ul>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/authors`}>Authors</Link></li>
                    <li><Link to={`/about`}>About</Link></li>
                </ul>
            </div>
            );
    }
});

export default Header;