﻿'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Dispatcher } from '../../dispatcher/appDispatcher';
import { deleteAuthor } from './actions/actions';
import Toastr from 'toastr';

let AuthorsList = React.createClass({
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },

    _deleteAuthor: function(id, event) {
        event.preventDefault();

        Dispatcher.dispatch(deleteAuthor(id));
        Toastr.success('Author deleted');
    },

    render: function () {
        let createAuthorRow = function (author) {
            return (
                <tr key={author.id}>
                    <td><a href="#" onClick={this._deleteAuthor.bind(this, author.id)}>Delete</a></td>
                    <td><Link to={`/author/${author.id}`}>{author.id}</Link></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.authors.map(createAuthorRow, this)}
                </tbody>
            </table>
        );
    }
});

export default AuthorsList;