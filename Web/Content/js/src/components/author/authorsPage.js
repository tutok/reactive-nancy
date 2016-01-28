'use strict';

import React from 'react';
import { Router, Link } from 'react-router';
import AuthorsList from './authorsList';
import ReactRedux from 'react-redux';

class AuthorsPage extends React.Component{
    render() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to={`/author`}>Add Author</Link>
                <AuthorsList authors={ this.props.authors } />
            </div>
        );
    }
};

export default ReactRedux.connect(x => x)(AuthorsPage);