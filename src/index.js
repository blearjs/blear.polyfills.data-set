'use strict';

var string = require('blear.utils.string');
var json = require('blear.utils.json');

var DATA_PREFIX = 'data-';

if (typeof CLASSICAL !== 'undefined' && CLASSICAL === true) {
    exports.get = function (el, dataKey) {
        dataKey = string.separatorize(dataKey);
        var dataVal = el.getAttribute(DATA_PREFIX + dataKey);
        return json.safeParse(dataVal) || dataVal;
    };

    exports.set = function (el, dataKey, dataVal) {
        dataKey = string.separatorize(dataKey);
        dataVal = json.safeStringify(dataVal) || String(dataVal);
        el.setAttribute(DATA_PREFIX + dataKey, dataVal);
    };
} else {
    exports.get = function (el, dataKey) {
        dataKey = string.humprize(dataKey);
        var dataVal = el.dataset[dataKey];
        return json.safeParse(dataVal) || dataVal;
    };

    exports.set = function (el, dataKey, dataVal) {
        dataKey = string.humprize(dataKey);
        dataVal = json.safeStringify(dataVal) || String(dataVal);
        el.dataset[dataKey] = dataVal;
    };
}