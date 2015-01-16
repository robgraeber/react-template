var React = require('react'),
    Router = require('react-router'),
    Home = require('./views/Home'),
    About = require('./views/About'),
    Layout = require('./views/Layout'),
    Route = Router.Route,
    NotFound = Router.NotFoundRoute;


var routes = (
    <Route path="/" handler={Layout}>
        <Route name="about" path="about/:id/?" handler={About} />
        <Route name="home" path=":id?/?" handler={Home} />
        <NotFound handler={Home} />
    </Route>
);

module.exports = routes;

if (typeof window !== 'undefined') {
    window.onload = function() {
        Router.run(routes, Router.HistoryLocation, function (Handler, state) {
            React.render(<Handler params={state.params}/>, document.body);
        });
    };
}