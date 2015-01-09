var createStore = module.exports = function (obj) {
    obj = obj || {};
    var storage = {};
    var listeners = [];

    obj.emitChange = function() {
        for (var i = 0; i < listeners.length; i++)
            listeners[i].apply(this);
    }
    obj.addChangeListener = function(listenerCb) {
        if(listeners.indexOf(listenerCb) === -1)
            listeners.push(listenerCb);
    }
    obj.removeChangeListener = function(listenerCb) {
        var i = listeners.indexOf(listenerCb);
        if(i !== -1)
            listeners.splice(i, 1);
    }
    obj.get = function (prop) {
        return storage[prop];
    }
    obj.set = function (prop, value) {
        if (typeof prop === 'string') {
            var obj = {};
            obj[prop] = value;
            prop = obj;
        }
        for(var key in prop) {
            storage[key] = prop[key];
        }
        this.emitChange();
    }
    if (obj.initialize) {
        obj.initialize();
    }
    return obj;
}