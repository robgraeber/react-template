var ApiHelper = require('../utils/ApiHelper'),
    createManager = require('react-toolkit/utils/createManager');

var Manager = module.exports = createManager({
    initialize: function() {
        ApiHelper.getFoodEvents('SF').then(function (foodEvents) {
            this.set('foodEvents', foodEvents);
        }.bind(this));
    }
});
