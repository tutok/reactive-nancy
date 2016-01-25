'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Dispatcher } from '../../dispatcher/appDispatcher';


let Author = React.createClass({
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onDelete: React.PropTypes.func.isRequired
    },
   
    render: function() {
        return (
            <tr>
                <td><a href="#" onClick={this.props.onDelete}>Delete</a></td>
                <td><Link to={`/author/${this.props.author.id}`}>{this.props.author.id}</Link></td>
                <td>{this.props.author.firstName} {this.props.author.lastName}</td>
            </tr>
        );
    }
});

export default Author;