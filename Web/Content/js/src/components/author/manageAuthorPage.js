'use strict';

import React from 'react';
import { Router, History, Lifecycle } from 'react-router';
import ToastR from 'toastr';
import AuthorForm from './authorForm';
import { Dispatcher } from '../../dispatcher/appDispatcher';
import { createAuthor, updateAuthor } from './actions/actions';
import { AuthorStore } from './../../stores/authorStore';
import ReactRedux from 'react-redux';


let ManageAuthorPage = React.createClass({

    mixins: [ Lifecycle, History ],

    getInitialState: function() {
        return {
            author: { id: '', firstName: '', lastName: '' },
            isSaved: false,
            errors: {}
        };
    },

    componentWillMount: function() {
        debugger;
        let authorId = this.props.params.id;

        if (authorId) {
            this.setState({
                author: this.props.authors.find(x => x.id === authorId)
            });
        }
    },

    routerWillLeave(nextLocation) {
        if (!this.state.isSaved) {
            return 'Your work is not saved! Are you sure you want to leave?';
        }
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

        return this.setState({
            author: this.state.author,
            isSaved: false
    });
    },

    saveAuthor: function(event) {
        event.preventDefault();

        if (!this.authorFormIsValid()) {
            return;
        }

        if (this.state.author.id) {
            this.props.dispatch(updateAuthor(this.state.author));
        } else {
            this.props.dispatch(createAuthor(this.state.author));
        }

        this.setState({ isSaved: true });
        ToastR.success('Author saved.');
        this.history.pushState(null, `/authors`);
    },

    render: function () {
        debugger;
        return (
            <AuthorForm author={ this.state.author }
                        onChange={ this.setAuthorState }
                        onSave={ this.saveAuthor }
                        errors={ this.state.errors } />
        );
    }
});

export default ReactRedux.connect(x => x)(ManageAuthorPage);