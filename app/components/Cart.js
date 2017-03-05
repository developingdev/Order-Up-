var React = require('react');
var h1Style = require('../styles').h1Style;

function Cart(props){
    var cartItems = props.cartItems;
    var listItems = Object.keys(cartItems).map((key) => 
        <li key={key}>
            {key}
            {cartItems[key].count}
        </li>
    );
    return(
        <div className='cart-container col-md-6'>
            <h1 style={h1Style}>{props.header}</h1>
            <ul>{listItems}</ul>
        </div>
    )
}


module.exports = Cart;