var ApiHelper = require('../services/ApiHelper'),
    createManager = require('react-toolkit/utils/createManager');

var Manager = createManager({
    initialize: function() {
        ApiHelper.getFoodEvents('SF').then(function (foodEvents) {
            this.set('foodEvents', foodEvents);
        }.bind(this));
    }
});

module.exports = Manager;
