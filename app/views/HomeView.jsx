var React = require('react'),
    AppStore = require2('stores/AppStore'),
    ApiService = require2('services/ApiService'),
    StoreMixin = require2('_effing/mixins/StoreMixin');

var Component = module.exports = React.createClass({
    mixins: [StoreMixin],
    statics: {
        storeListeners: [AppStore],
    },
    getInitialState: function() {
        return {
            foodEvents: AppStore.get('foodEvents') || []
        };
    },
    componentDidMount: function() {
        if (!AppStore.get('foodEvents'))
            ApiService.getFoodEvents('SF').then(function (foodEvents) {
                AppStore.set('foodEvents', foodEvents);
            });
    },
    _onChange: function() {
        this.setState({
            foodEvents: AppStore.get('foodEvents') || []
        });
    },
    render: function() {  
        return (
            <div>
                <h3>HOME</h3>
                <div>This is the home view</div>
                <div>This is the count: {this.state.foodEvents.length}</div>
            </div>
        );
    }
});