// js/components/person-list.js
var React = require('react');
var ReactDOM = require('react-dom');

var Person = require('./person');

var PersonList = function() {
    return (
        <div className="person-list">
            <Person name="Derek Zoolander"
                imageUrl="http://uifaces.com/assets/static/images/zoolander.jpg"
                job="Male model" />
            <Person name="Donald Knuth"
                imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
                job="Clever chap" />
        </div>
    );
};

Person.defaultProps = {
    imageUrl: 'http://www.gravatar.com/avatar/?d=identicon'
};

module.exports = PersonList;