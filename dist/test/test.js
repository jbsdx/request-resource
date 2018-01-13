"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JsonResource_1 = require("../lib/resource/format/JsonResource");
var chai_1 = require("chai");
var url_1 = require("url");
var jsonStringMock = '[{"test": "test"}]';
var serverMock = function (url, type) {
    this.fetch = function () {
        var promise = new Promise(function (resolve) {
            type.convertToJson(jsonStringMock)
                .then(function (response) {
                resolve(response);
            });
        });
        return promise;
    };
};
describe('RequestResource module', function () {
    describe('#JSON format resource test', function () {
        it('should parse valid JSON data', function (done) {
            var type = new JsonResource_1.JsonResource();
            var url = new url_1.URL("http://localhost:3090/");
            var _agent = new serverMock(url, type);
            _agent.fetch()
                .then(function (response) {
                chai_1.assert.equal(response[0].test, "test");
                done();
            })
                .catch(function (reason) {
                done(reason);
            });
        });
    });
});
//# sourceMappingURL=test.js.map