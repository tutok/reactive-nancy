'use strict';

import React from 'react';

let Header = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#authors">Authors</a></li>
                    <li><a href="/#about">About</a></li>
                </ul>
            </div>
            );
    }
});

export default Header;