'use strict';

import React from 'react';
import AuthorsApi from '../api/authorsApi';
import AuthorsList from './authorsList';

let AuthorsPage = React.createClass({
    getInitialState: function () {
        return {
            authors: []
        };
    },

    componentDidMount: function () {
        if (this.isMounted()) {
            this.setState({
                authors: AuthorsApi.getAllAuthors()
            });
        }
    },

    render: function () {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorsList authors={this.state.authors} />
            </div>
        );
    }
});

export default AuthorsPage;