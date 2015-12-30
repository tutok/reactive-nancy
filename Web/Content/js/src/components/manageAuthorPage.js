'use strict';

import React from 'react';
import AuthorForm from './authorForm';

let ManageAuthorPage = React.createClass({
    getInitialState: function() {
        return {
            author: { id: '', firstName: '', lastName: '' }
        };
    },
    setAuthorState: function(event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;

        return this.setState({ author: this.state.author });
    },
    render: function () {
        return (
            <AuthorForm author={ this.state.author } onChange={this.setAuthorState} />
        );
    }
});

export default ManageAuthorPage;