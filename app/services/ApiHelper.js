var request = require('superagent-promise'),
    API_URL = require('../Constants').API_URL;

var ApiHelper = module.exports = {
    getFoodEvents: function(address) {
        return request.get(API_URL).query({address: address}).end().then(function (res){
            return res.body.results;
        });
    }
};

module.exports = ApiHelper;