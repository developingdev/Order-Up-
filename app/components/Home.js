var React = require('react');
var MenuContainer = require('../containers/MenuContainer');
var CartContainer = require('../containers/CartContainer');
require("../style/style.less");

const MenuItems = [
    { name: 'Double Double' },
    { name: 'Cheeseburger' }
]

var Home = React.createClass({
    getInitialState: function () {
        return {
            counter: 0,
            cartItems: []
        }

    },
    addToCart: function (item) {
        var items = this.state.cartItems;

        if (items[item.name]) {
            items[item.name].count++;
        } else {
            items[item.name] = {
                count: 1
            }
        }

        this.setState({
            cartItems: items
        })
    },
    removeFromCart: function (item) {
        var items = this.state.cartItems;

        if (items[item.name]) {
            items[item.name].count--;

            if (items[item.name].count == 0)
                delete items[item.name];

            this.setState({
                cartItems: items
            })


        }


    },
    render: function () {
        return (
            <div className='home-container col-md-12'>
                <MenuContainer
                    menuItems={MenuItems}
                    addToCart={this.addToCart}
                    removeFromCart={this.removeFromCart} />
                <CartContainer cartItems={this.state.cartItems} />
                <span>COUNTER: {this.state.counter}</span>
            </div>

        )
    }
})

module.exports = Home;