'use strict';

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Dispatcher } from '../../dispatcher/appDispatcher';
import { deleteAuthor } from './actions/actions';
import Toastr from 'toastr';
import Author from './author';


class AuthorsList extends Component{

    _deleteAuthor(id, event) {
        event.preventDefault();

        Dispatcher.dispatch(deleteAuthor(id));
        Toastr.success('Author deleted');
    }

    render() {
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
                    {this.props
                        .authors
                        .map(x => (<Author key={x.id} author={x} onDelete={this._deleteAuthor.bind(this, x.id)}> </Author>), this)}
                </tbody>
            </table>
        );
    }
};

AuthorsList.propTypes = {
    authors: React.PropTypes.array.isRequired
};

export default AuthorsList;