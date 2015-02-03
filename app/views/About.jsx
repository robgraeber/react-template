var React = require('react'),
    AppManager = require('../models/AppManager'),
    ChangeListener = require('react-toolkit/mixins/ChangeListener');

var Component = React.createClass({
    mixins: [ChangeListener],
    statics: {
        changeEmitters: [AppManager]
    },
    getInitialState: function() {
        return {
            foodEvents: AppManager.get('foodEvents') || []
        };
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

module.exports = Component;