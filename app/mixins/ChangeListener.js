var DEFAULT_CHANGE_HANDLER = '_onChange',
    ChangeListener;

ChangeListener = {
    componentDidMount: function() {
        var changeListeners = this.constructor.changeListeners; // Static property on component
        if (changeListeners) {
            for (var i = 0; i < changeListeners.length; i++) {
                changeListeners[i].addChangeListener(this[DEFAULT_CHANGE_HANDLER]);
            }
        }
    },
    componentWillUnmount: function() {
        var changeListeners = this.constructor.changeListeners; // Static property on component

        if (changeListeners) {
            for (var i = 0; i < changeListeners.length; i++) {
                changeListeners[i].removeChangeListener(this[DEFAULT_CHANGE_HANDLER]);
            }
        }
    }
};

module.exports = ChangeListener;
