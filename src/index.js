var
    worker = require("worker-loader!./worker"),
    three = require("three")
;

module.exports = require("./physi")(worker, three)