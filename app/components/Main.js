var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Main = React.createClass({
    render: function () {
        return (
            <div className='main-container container'>
                {this.props.children}

                {/*<div className='actionBar visible-xs-*'>
                    <Link to='/menu'>
                        <button type='button'>View Menu</button>
                    </Link>
                    <Link to='/cart'>
                        <button type='button'>View Cart</button>
                    </Link>

                </div>*/}
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
            </div>
        )
    }
})

module.exports = Main;