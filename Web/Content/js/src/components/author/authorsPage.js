'use strict';

import React, { Component, PropTypes } from 'react';
import { Router, Link } from 'react-router';
import AuthorStore from './../../stores/authorStore';
import AuthorsList from './authorsList';

class AuthorsPage extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            authors: AuthorStore.getAllAuthors()
        };
        this._onChange = this._onChange.bind(this);

        AuthorStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AuthorStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({ authors: AuthorStore.getAllAuthors() });
    }

    render() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to={`/author`}>Add Author</Link>
                <AuthorsList authors={this.state.authors} />
            </div>
        );
    }
};

export default AuthorsPage;