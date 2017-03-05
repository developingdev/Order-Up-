var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var MenuContainer = require('../containers/MenuContainer');
var CartContainer = require('../containers/CartContainer');

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='Menu' component={MenuContainer} />
            <Route path='Cart' component={CartContainer} />
        </Route>
    </Router>
);

module.exports = routes;