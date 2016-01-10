'use strict';

import React from 'react';
import { Link } from 'react-router';

var NotFoundPage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Page not found</h1>
                <Link to={`/`}>Back to Home</Link>
            </div>
        );
    }
});

export default NotFoundPage;