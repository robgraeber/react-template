var createChangeEmitter = require('./createChangeEmitter');
//returns a manager obj that acts as a singleton data store w/ change listeners
var createManager = module.exports = function (baseObj) {
    baseObj = baseObj || {};
    baseObj = createChangeEmitter(baseObj);
    
    var storage = {};

    baseObj.get = function (prop) {
        return storage[prop];
    }
    baseObj.set = function (prop, value) {
        if (typeof prop === 'string') {
            var baseObj = {};
            baseObj[prop] = value;
            prop = baseObj;
        }
        for(var key in prop) {
            storage[key] = prop[key];
        }
        this.emitChange();
    }
    if (baseObj.initialize) {
        baseObj.initialize();
    }
    return baseObj;
}