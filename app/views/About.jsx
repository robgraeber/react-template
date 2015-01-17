var React = require('react'),
    AppManager = require('../managers/AppManager'),
    ChangeListener = require('../mixins/ChangeListener');

var Component = module.exports = React.createClass({
    mixins: [ChangeListener],
    statics: {
        changeListeners: [AppManager],
    },
    getInitialState: function() {
        return {
            foodEvents: AppManager.get('foodEvents') || []
        };
    },
    componentDidMount: function() {
    },
    _onChange: function() {
        this.setState({
            foodEvents: AppManager.get('foodEvents') || []
        });
    },
    render: function() {  
        return (
            <div>
                <h3>ABOUT</h3>
                <div>This is the about view</div>
                <div>This is the count: {this.state.foodEvents.length}</div>
            </div>
        );
    }
});