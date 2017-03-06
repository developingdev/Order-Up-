var React = require('react');
var MenuContainer = require('../containers/MenuContainer');
var CartContainer = require('../containers/CartContainer');
require("../style/style.less");

const MenuItems = [
    { name: 'Double Double' },
    { name: 'Cheeseburger' },
    { name: 'Hamburger' },
    { name: 'French Fries' },
    { name: 'Shake' }
    
]

var Home = React.createClass({
    getInitialState: function () {
        var items = MenuItems.reduce(function(acc, val){
            acc[val.name] = {
                count: 0
                //Other info of item mapped here
                //Nutrional info, customization options
            }

            return acc;
        }, {})

        console.log(items);
        return {
            counter: 0,
            menuItems: items,
            cartItems: []
        }

    },
    addToCart: function (item) {
        var items = this.state.menuItems;

        items[item.name].count++;

        this.setState({
            menuItems: items
        })

        console.log(this.state.menuItems);
    },
    removeFromCart: function (item) {
        var items = this.state.menuItems;

        if(items[item.name].count > 0){
            items[item.name].count--;

            this.setState({
                menuItems: items
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
                <CartContainer menuItems={this.state.menuItems} />
                <span>COUNTER: {this.state.counter}</span>
            </div>

        )
    }
})

module.exports = Home;