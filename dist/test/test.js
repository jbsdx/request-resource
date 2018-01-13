"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResourceFormat_1 = require("../lib/resource/ResourceFormat");
var chai_1 = require("chai");
var fs = require("file-system");
var Request_1 = require("../lib/request/Request");
var create = require("create-server");
var server = new create({ hostname: "localhost", port: 3091 }, {
    listening: function (err) { },
    request: function (req, res) {
        res.write(fs.readFileSync(__dirname + "/data." + req.url.substr(1)));
        res.end();
    }
});
var LOCAL_URL = "http://localhost:3091/";
var RSS = ResourceFormat_1.ResourceFormat.RSS;
var JSON = ResourceFormat_1.ResourceFormat.JSON;
var XML = ResourceFormat_1.ResourceFormat.XML;
after(function () {
    server.close();
});
describe('RequestResource module', function () {
    describe('#JSON format resource test', function () {
        it('should parse valid JSON data', function (done) {
            var request = new Request_1.Request(LOCAL_URL + "json", JSON);
            request.fetch()
                .then(function (response) {
                chai_1.assert.equal(response[0].test, "test");
                done();
            })
                .catch(function (reason) { return done(reason); });
        });
    });
    describe('#RSS format resource test', function () {
        it('should parse valid RSS data', function (done) {
            var request = new Request_1.Request(LOCAL_URL + "rss", RSS);
            request.fetch()
                .then(function (response) {
                chai_1.assert.equal(response.rss.version, "2.0");
                done();
            })
                .catch(function (reason) { return done(reason); });
        });
    });
    describe('#XML format resource test', function () {
        it('should parse valid XML data', function (done) {
            var request = new Request_1.Request(LOCAL_URL + "xml", XML);
            request.fetch()
                .then(function (response) {
                chai_1.assert.equal(response.base.field, "test");
                done();
            })
                .catch(function (reason) { return done(reason); });
        });
    });
});
//# sourceMappingURL=test.js.map