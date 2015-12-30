'use strict';

import React from 'react';

let AuthorForm = React.createClass({
    render: function () {
        return (
            <form>
                <h1>Manage Author</h1>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" placeholder="First Name" ref="firstName" onChange={this.props.onChange} value={this.props.author.firstName}/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" placeholder="Last Name" ref="lastName" onChange={this.props.onChange} value={this.props.author.lastName}/>
                </div>
                <input type="submit" value="Save"/>
            </form>
        );
    }
});

export default AuthorForm;