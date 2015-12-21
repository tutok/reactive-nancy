'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/homePage.jsx');
var About = require('./components/aboutPage.jsx');
var AuthorsPage = require('./components/authorsPage.jsx');
var Header = require('./components/header.jsx');


var App = React.createClass({
    render: function() {
        var Child;

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