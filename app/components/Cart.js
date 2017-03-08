var React = require('react');
var h1Style = require('../styles').h1Style;

function CartListItem(props) {
    if (props.value.count > 0)
        return (
            <li>
                {props.value.count}
            </li>
        )
    else
        return null
}
function CartListTableItem(props) {
    if (props.value.count > 0)
        return (
            <tr>
                <td>
                    {props.name}
                </td>
                <td className='text-center'>
                    {props.value.count}
                </td>
            </tr>
        )
    else
        return null
}
function Cart(props) {
    var menuItems = props.menuItems;
    var listItems = Object.keys(menuItems).map((key) =>
        // <CartListItem key={key} value={menuItems[key]} />
        <CartListTableItem key={key} value={menuItems[key]} name={key} />

    );
    return (
        <div className='cart-container col-md-6'>

            <table className="table">
                <caption>YOUR ORDER</caption>
                <thead>
                    <tr>
                        <td></td>
                        <td className='text-center'>Quantity</td>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>
        </div>
    )
}


module.exports = Cart;