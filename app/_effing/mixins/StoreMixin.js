var DEFAULT_CHANGE_HANDLER = '_onChange',
    StoreMixin;

StoreMixin = {
    componentDidMount: function() {
        var storeListeners = this.constructor.storeListeners; // Static property on component
        if (storeListeners) {
            for (var i = 0; i < storeListeners.length; i++) {
                storeListeners[i].addChangeListener(this[DEFAULT_CHANGE_HANDLER]);
            }
        }
    },
    componentWillUnmount: function() {
        var storeListeners = this.constructor.storeListeners; // Static property on component

        if (storeListeners) {
            for (var i = 0; i < storeListeners.length; i++) {
                storeListeners[i].removeChangeListener(this[DEFAULT_CHANGE_HANDLER]);
            }
        }
    }
};

module.exports = StoreMixin;
