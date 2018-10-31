var exec = require('cordova/exec');

exports.coolMethod = function(arg0, success, error) {
    exec(success, error, "Barcode1Scanner", "coolMethod", [arg0]);
};
exports.getDevices = function(arg0, success, error) {
    exec(success, error, "Barcode1Scanner", "getDevices", [arg0]);
};
exports.activate = function(arg0, success, error) {
    exec(success, error, "Barcode1Scanner", "activate", [arg0]);
};
