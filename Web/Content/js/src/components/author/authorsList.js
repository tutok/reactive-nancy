'use strict';

import React from 'react';
import { Link } from 'react-router';
import Toastr from 'toastr';
import Author from './author';
import { deleteAuthor } from './actions/actions';

class AuthorsList extends React.Component{

    _deleteAuthor(id, event) {
        event.preventDefault();

        this.props.dispatch(deleteAuthor(id));
        Toastr.success('Author deleted');
    }

    render() {
        debugger;
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