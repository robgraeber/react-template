//Entry point for the app
require('./_effing/globals');

var React = require('react'),
    Router = require('react-router'),
    HomeView = require2('views/HomeView'),
    AboutView = require2('views/AboutView'),
    LayoutView = require2('views/LayoutView'),
    Route = Router.Route,
    NotFound = Router.NotFoundRoute;


var routes = (
    <Route path="/" handler={LayoutView}>
        <Route name="aboutView" path="about/:id/?" handler={AboutView} />
        <Route name="homeView" path=":id?/?" handler={HomeView} />
        <NotFound handler={HomeView} />
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