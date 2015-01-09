//uses absolutes instead of relative paths for require

var require2 = module.exports = function(moduleName) {
    var module = require('../../'+moduleName);

    return module;
}