import { JsonResource } from '../lib/resource/format/JsonResource';
import { ResourceFormat } from '../lib/resource/ResourceFormat';
import { RssResource } from '../lib/resource/format/RssResource';
import { XmlResource } from '../lib/resource/format/XmlResource';
import { assert } from "chai";
import * as fs from "file-system";
import { Request } from '../lib/request/Request';
import * as create from 'create-server';

const server = new create({hostname: "localhost", port: 3091}, { 
    listening: function (err) {}, 
    request: function (req, res) {
        res.write(fs.readFileSync(__dirname + "/data."+req.url.substr(1)));
        res.end();
    }
});

const LOCAL_URL = "http://localhost:3091/";

const RSS: ResourceFormat = ResourceFormat.RSS;
const JSON: ResourceFormat = ResourceFormat.JSON;
const XML: ResourceFormat = ResourceFormat.XML;

after(function() {
    server.close();
});

describe('RequestResource module', function () {

    describe('#JSON format resource test', function () {

        it('should parse valid JSON data', function (done) {

            let request = new Request(LOCAL_URL + "json", JSON);
            request.fetch()
            .then(response => {
                assert.equal(response[0].test, "test");
                done();
            })
            .catch(reason => done(reason));
        });

    });

    describe('#RSS format resource test', function () {

        it('should parse valid RSS data', function (done) {
            let request = new Request(LOCAL_URL + "rss", RSS);
            request.fetch()
            .then(response => {
                assert.equal(response.rss.version, "2.0");
                done();
            })
            .catch(reason => done(reason));
        });

    });

    describe('#XML format resource test', function () {

        it('should parse valid XML data', function (done) {
            let request = new Request(LOCAL_URL + "xml", XML);
            request.fetch()
            .then(response => {
                assert.equal(response.base.field, "test");
                done();
            })
            .catch(reason => done(reason));
        });
    });

});