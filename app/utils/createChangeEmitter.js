//returns a manager obj that acts as a singleton data store w/ change listeners
var createManager = module.exports = function (baseObj) {
    baseObj = baseObj || {};

    var listeners = [];

    baseObj.emitChange = function() {
        for (var i = 0; i < listeners.length; i++)
            listeners[i].apply(this);
    }
    baseObj.addChangeListener = function(listenerCb) {
        if(listeners.indexOf(listenerCb) === -1)
            listeners.push(listenerCb);
    }
    baseObj.removeChangeListener = function(listenerCb) {
        var i = listeners.indexOf(listenerCb);
        if(i !== -1)
            listeners.splice(i, 1);
    }
    return baseObj;
}