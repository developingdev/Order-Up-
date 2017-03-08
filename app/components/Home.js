var React = require('react');
var MenuContainer = require('../containers/MenuContainer');
var CartContainer = require('../containers/CartContainer');
var Data = require('../data')
require("../style/style.less");

var Home = React.createClass({
    getInitialState: function () {
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
        var isSmall = this.screenIsSmall();
        return {
            counter: 0,
            menuItems: items,
            drinkItems: drinkItems,
            cartItems: [],
            activeComponent: 'menu',
            screenIsSmall: isSmall
        }
    },
    addToCart: function (item) {
        var items = this.state.menuItems;

        items[item.name].count++;

        this.setState({
            menuItems: items
        })
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

    setActive: function (component) {
        this.setState({
            activeComponent: component
        })
    },
    updateScreenSize: function () {
        var isSmall = this.screenIsSmall();
        this.setState({
            screenIsSmall: isSmall
        })
    },
    screenIsSmall: function () {
        return document.body.clientWidth < 768;
    },
    componentDidMount() {
        window.addEventListener('resize', this.updateScreenSize);
    },
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateScreenSize);
    },
    render: function () {
        return (
            <div className='home-container col-sm-12'>
                <div className='col-sm-6 menu-wrapper'>
                    <MenuContainer
                        menuItems={Data.MenuItems}
                        addToCart={this.addToCart}
                        removeFromCart={this.removeFromCart}
                        isActive={this.state.activeComponent == 'menu' || !(this.state.screenIsSmall)}
                        header='Food'
                    />
                    <MenuContainer
                        menuItems={Data.DrinkItems}
                        addToCart={this.addToCart}
                        removeFromCart={this.removeFromCart}
                        isActive={this.state.activeComponent == 'drink' || !(this.state.screenIsSmall)}
                        header='Drinks'
                    />
                </div>

                <CartContainer
                    menuItems={this.state.menuItems}
                    isActive={this.state.activeComponent == 'cart' || !(this.state.screenIsSmall)} />

                <div className='actionBar hidden-sm hidden-md hidden-lg'>
                    <a onClick={() => { this.setActive('menu') }}>
                        <i className="fa fa-cutlery fa-2x" aria-hidden="true"></i>
                    </a>
                    <a onClick={() => { this.setActive('drink') }}>
                        <i className="fa fa-glass fa-2x" aria-hidden="true"></i>
                    </a>
                    <a onClick={() => { this.setActive('cart') }}>
                        <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                    </a>
                </div>
            </div>


        )
    }
})

module.exports = Home;