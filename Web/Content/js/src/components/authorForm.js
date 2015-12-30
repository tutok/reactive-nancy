'use strict';

import React from 'react';
import TextInput from './TextInput';

let AuthorForm = React.createClass({
    render: function () {
        return (
            <form>
                <h1>Manage Author</h1>
                <TextInput name="firstName" label="First Name" value={this.props.author.firstName} onChange={this.props.onChange} />
                <TextInput name="lastName" label="Last Name" value={this.props.author.lastName} onChange={this.props.onChange} />
                <input type="submit" value="Save"/>
            </form>
        );
    }
});

export default AuthorForm;