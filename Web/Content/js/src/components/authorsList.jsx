'use strict';

import React from 'react';
import AuthorsApi from '../api/authorsApi';

let AuthorsList = React.createClass({
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },

    render: function () {
        let createAuthorRow = function (author) {
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <table>
                <thead>
                    <tr>
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