var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


//Moved from main to home


const MenuItems = [
    { name: 'Double Double' },
    { name: 'Cheeseburger' },
    { name: 'Hamburger' },
    { name: 'French Fries' },
    { name: 'Shake' }

]

var Main = React.createClass({
        getInitialState: function () {
        var items = MenuItems.reduce(function (acc, val) {
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

        if (items[item.name].count > 0) {
            items[item.name].count--;

            this.setState({
                menuItems: items
            })
        }
    },
    render: function () {
        return (
            <div className='main-container container'>
                
                <div className='actionBar'>
                    <Link to='/menu'>
                        <i className="fa fa-cutlery fa-2x" aria-hidden="true"></i>
                    </Link>
                    <Link to='/drinks'>
                        <i className="fa fa-glass fa-2x" aria-hidden="true"></i>
                    </Link>
                    <Link to='/cart'>
                        <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                    </Link>
                </div>
                {this.props.children}
            </div>
        )
    }
})

module.exports = Main;