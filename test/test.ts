import { Request } from '../lib/request/Request';
import { JsonResource } from '../lib/resource/format/JsonResource';
import { assert } from "chai";
import {URL} from 'url';
import { IResourceType } from '../dist/resource/IResourceType';

const jsonStringMock = '[{"test": "test"}]';

const serverMock = function(url: URL, type: IResourceType) {
    this.fetch = function(): Promise<any> {
        let promise = new Promise<any>((resolve) => {
            type.convertToJson(jsonStringMock)
                .then(response => {
                    resolve(response);
                });
        });
        return promise;
    };
};

describe('RequestResource module', function () {
    describe('#JSON format resource test', function () {

        it('should parse valid JSON data', function (done) {

            let type = new JsonResource();
            let url = new URL("http://localhost:3090/");
            let _agent = new serverMock(url, type)
                _agent.fetch()
                .then((response) => {
                    assert.equal(response[0].test, "test");
                    done();
                })
                .catch((reason) => {
                    done(reason);
                });
        });

    });

});