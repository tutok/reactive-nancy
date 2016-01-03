'use strict';

import React from 'react';
import { Router, History } from 'react-router';
import ToastR from 'toastr';
import AuthorForm from './authorForm';
import AuthorsApi from './../api/authorsApi';

let ManageAuthorPage = React.createClass({
    mixins: [ History ],

    getInitialState: function() {
        return {
            author: { id: '', firstName: '', lastName: '' },
            errors: {}
        };
    },

    authorFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {};

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'First name must be at least 3 characters';
            formIsValid = false;
        }
        
        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'Last name must be at least 3 characters';
            formIsValid = false;
        }

        this.setState({
            author: this.state.author,
            errors: this.state.errors
        });

        return formIsValid;
    },

    setAuthorState: function(event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;

        return this.setState({ author: this.state.author });
    },

    saveAuthor: function(event) {
        event.preventDefault();

        if (!this.authorFormIsValid()) {
            return;
        }

        AuthorsApi.saveAuthor(this.state.author);
        ToastR.success('Author saved.');
        this.history.pushState(null, `/authors`);
    },

    render: function () {
        return (
            <AuthorForm author={ this.state.author } onChange={this.setAuthorState} onSave={this.saveAuthor} errors={this.state.errors} />
        );
    }
});

export default ManageAuthorPage;