var React = require('react'),
    AppManager = require('../managers/AppManager'),
    ChangeListener = require('react-toolkit/mixins/ChangeListener');

var Component = module.exports = React.createClass({
    mixins: [ChangeListener],
    statics: {
        changeEmitters: [AppManager],
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
                <h3>HOME</h3>
                <div>This is the home view</div>
                <div>This is the count: {this.state.foodEvents.length}</div>
            </div>
        );
    }
});