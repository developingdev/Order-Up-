var React = require('react');
var h1Style = require('../styles').h1Style;
var Cart = require('../components/Cart');

var CartContainer = React.createClass({
    render: function () {
        if (this.props.isActive)
            return (

                <div className='cart-container'>
                    <h1 style={h1Style}>Cart</h1>
                    <Cart menuItems={this.props.menuItems} />
                </div>
            )
            else return null;
    }
})

module.exports = CartContainer;