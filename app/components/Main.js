var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Main = React.createClass({

    render: function () {
        return (
            <div className='main-container container'>
                {this.props.children}

                <div className='actionBar visible-xs-*'>
                    <Link to='/menu'>
                        <button type='button'>View Menu</button>
                    </Link>
                    <Link to='/cart'>
                        <button type='button'>View Cart</button>
                    </Link>

                </div>

            </div>
        )
    }
})

module.exports = Main;