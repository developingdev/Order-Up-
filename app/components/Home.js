var React = require('react');
var MenuContainer = require('../containers/MenuContainer');
var CartContainer = require('../containers/CartContainer');
var Data = require('../data')

require("../style/style.less");
// const MenuItems = [
//     { name: 'Double Double' },
//     { name: 'Cheeseburger' },
//     { name: 'Hamburger' },
//     { name: 'French Fries' },
//     { name: 'Shake' }
// ]
// const DrinkItems = [
//     { name: 'Soda' },
//     { name: 'Cheeseburger' },
//     { name: 'Hamburger' },
//     { name: 'French Fries' },
//     { name: 'Shake' }
// ]


var Home = React.createClass({
    getInitialState: function () {
        console.log(Data.DrinkItems);
        var items = Data.MenuItems.reduce(function (acc, val) {
            acc[val.name] = {
                count: 0
                //Other info of item mapped here
                //Nutrional info, customization options
            }

            return acc;
        }, {})

        var drinkItems = Data.DrinkItems.reduce(function (acc, val) {
            acc[val.name] = {
                count: 0
                //Other info of item mapped here
                //Nutrional info, customization options
            }

            return acc;
        }, items)

        console.log(items);
        return {
            counter: 0,
            menuItems: items,
            drinkItems: drinkItems,
            cartItems: [],
            activeComponent: 'menu'
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

        if (items[item.name].count > 0) {
            items[item.name].count--;

            this.setState({
                menuItems: items
            })
        }
    },
    setActive: function(component){
        this.setState({
            activeComponent: component
        })
    },
    render: function () {
        return (
            <div className='home-container col-md-12'>
                <MenuContainer
                    menuItems={Data.MenuItems}
                    addToCart={this.addToCart}
                    removeFromCart={this.removeFromCart}
                    isActive={this.state.activeComponent == 'menu'}
                     />
                <MenuContainer
                    menuItems={Data.DrinkItems}
                    addToCart={this.addToCart}
                    removeFromCart={this.removeFromCart}
                    isActive={this.state.activeComponent == 'drink'}
                     />
                <CartContainer 
                    menuItems={this.state.menuItems}
                    isActive={this.state.activeComponent == 'cart'} />

                <div className='actionBar visible-xs-inline'>
                    <span>View Menu</span>
                    <span>View Cart</span>
                </div>
                <div className='actionBar'>
                    <a onClick={() => {this.setActive('menu')}}>
                        <i className="fa fa-cutlery fa-2x" aria-hidden="true"></i>
                    </a>
                    <a onClick={() => {this.setActive('drink')}}>
                        <i className="fa fa-glass fa-2x" aria-hidden="true"></i>
                    </a>
                    <a onClick={() => {this.setActive('cart')}}>
                        <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                    </a>
                </div>
            </div>


        )
    }
})

module.exports = Home;