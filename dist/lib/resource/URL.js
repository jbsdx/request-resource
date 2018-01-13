"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var URL = /** @class */ (function () {
    function URL(url) {
        this.url = url;
    }
    URL.prototype.isValid = function () {
        /* let expression = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi,
            regex = new RegExp(expression),
            valid = false;

        if (this.url.toString().match(regex)) {
            valid = true;
        }  */
        var valid = true;
        return valid;
    };
    URL.prototype.toString = function () {
        return this.url;
    };
    return URL;
}());
exports.URL = URL;
//# sourceMappingURL=URL.js.map