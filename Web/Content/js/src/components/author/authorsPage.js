'use strict';

import React from 'react';
import { Router, Link } from 'react-router';
import AuthorActions from './../../actions/authorActions';
import AuthorStore from './../../stores/authorStore';
import AuthorsList from './authorsList';

let AuthorsPage = React.createClass({

    getInitialState: function () {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },

    render: function () {
        return (
            <div>
                <h1>Authors</h1>
                <Link to={`/author`}>Add Author</Link>
                <AuthorsList authors={this.state.authors} />
            </div>
        );
    }
});

export default AuthorsPage;