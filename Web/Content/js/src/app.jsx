'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/homePage.jsx';
import About from './components/aboutPage.jsx';
import AuthorsPage from './components/authorsPage.jsx';
import Header from './components/header.jsx';


var App = React.createClass({
    render: function() {
        let Child;

        switch (this.props.route) {
        case 'about':
            Child = About;
            break;
        case 'authors':
            Child = AuthorsPage;
            break;
        default:
            Child = Home;
        }

        return (
            <div>
                <Header />
                <Child />
            </div>
        );
    }
});



function render() {
    var route = window.location.hash.substr(1);
    ReactDOM.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();