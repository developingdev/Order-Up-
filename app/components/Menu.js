var React = require('react');
var h1Style = require('../styles').h1Style;
//var PropTypes = React.PropTypes;

function Menu(props) {
    const menuItems = props.menuItems;
    const listItems = menuItems.map((item) =>
        <li key={item.name}>
            <button className='btn btn-default btn-xs' onClick={() => props.removeFromCart(item)}>-</button>
            <span className='menuItemName text-center'>
                {item.name}
            </span>
            <button className='btn btn-default btn-xs' onClick={() => props.addToCart(item)}>+</button>

            {/*<span className='menuItemControls'>
            </span>*/}

        </li>
    );
    return (
        <div className='menu-container col-sm-12'>
            <h1 style={h1Style} className='text-center'>{props.header}</h1>
            <ul>{listItems}</ul>
        </div>
    )
}


//Menu.propTypes = {
//   header: React.PropTypes.string,
//   menuItems: React.PropTypes.array
//}


module.exports = Menu;