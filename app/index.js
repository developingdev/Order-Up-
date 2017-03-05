var MENU_ITEMS=[
    {Name: 'Double Double'}
];

var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes');

/*var MenuItem = React.createClass({
    addToCart: function(){

    },
    removeFromCart: function(){

    },
    render: function(){
        return (
            <div>
                <span>
                    {this.props.children}
                </span>
                <span>
                    Quantity
                </span>
            </div>
        )
    }
});

var Menu = React.createClass({
    render: function(){
        return (
            <ul>
                <MenuItem>
                    {this.props.items}
                </MenuItem>
            </ul>
        )
    }
});*/

ReactDom.render(
    routes,
    document.getElementById('app')
)