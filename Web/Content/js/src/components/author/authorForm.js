'use strict';

import React, { Component, PropTypes} from 'react';
import TextInput from './../shared/TextInput';

class AuthorForm extends Component{
    render() {
        return (
            <form>
                <h1>Manage Author</h1>
                <TextInput name="firstName" label="First Name" value={this.props.author.firstName} onChange={this.props.onChange} error={this.props.errors.firstName} />
                <TextInput name="lastName" label="Last Name" value={this.props.author.lastName} onChange={this.props.onChange} error={this.props.errors.lastName} />
                <input type="submit" value="Save" onClick={this.props.onSave}/>
            </form>
        );
    }
};

AuthorForm.PropTypes = {
    author: React.PropTypes.object.isRequired,
    onSaved: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
};

export default AuthorForm;