var React = require('react');
var Menu = require('../components/Menu')



var MenuContainer = React.createClass({
    render: function () {
        if (this.props.isActive)
        return (

            <Menu
                menuItems={this.props.menuItems}
                addToCart={this.props.addToCart}
                removeFromCart={this.props.removeFromCart}
                header="In n Out Menu" />
        )
        else return null
    }
})

module.exports = MenuContainer;