var ApiManager = require('./ApiManager'),
    createManager = require('../utils/createManager');

var Manager = module.exports = createManager({
    initialize: function() {
        ApiManager.getFoodEvents('SF').then(function (foodEvents) {
            this.set('foodEvents', foodEvents);
        }.bind(this));
    }
});
