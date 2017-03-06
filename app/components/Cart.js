var React = require('react');
var h1Style = require('../styles').h1Style;

function CartListItem(props){
    if(props.value.count > 0)
    return(
        <li>
            {props.value.count}
        </li>
    )
    else
    return null
    
}

function Cart(props){
    var menuItems = props.menuItems;
    var listItems = Object.keys(menuItems).map((key) => 
        <CartListItem key={key} value={menuItems[key]} />
        //     {key}
        //     {menuItems[key].count}
        // </li>
    );
    return(
        <div className='cart-container col-md-6'>
            <h1 style={h1Style}>{props.header}</h1>
            <ul>{listItems}</ul>
        </div>
    )
}


module.exports = Cart;