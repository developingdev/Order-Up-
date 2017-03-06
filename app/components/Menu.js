var React = require('react');
var h1Style = require('../styles').h1Style;
//var PropTypes = React.PropTypes;

function Menu(props){
    const menuItems = props.menuItems;
    const listItems = menuItems.map((item) => 
        <li key={item.name}>
            <span className='menuItemName'>
{item.name}
            </span>
            
            <span className='menuItemControls'>
            <button className='btn btn-default' onClick={() =>  props.removeFromCart(item)}>-</button>
            <button className='btn btn-default' onClick={() =>  props.addToCart(item)}>+</button>
            </span>
            
        </li>
    );
    return(
        <div className='menu-container col-md-6'>
            <h1 style={h1Style}>{props.header}</h1>
            <ul>{listItems}</ul>
        </div>
    )
}


//Menu.propTypes = {
 //   header: React.PropTypes.string,
 //   menuItems: React.PropTypes.array
//}


module.exports = Menu;