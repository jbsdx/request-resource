var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ResourceFormat } from '../resource/ResourceFormat';
import { JsonResource } from '../resource/format/JsonResource';
import { RssResource } from '../resource/format/RssResource';
import * as request from 'superagent';
import { URL } from '../resource/URL';
export class Request {
    constructor(url, resourceFormat) {
        this.resourceFormat = resourceFormat;
        this.resolveType();
        this.url = new URL(url);
    }
    resolveType() {
        switch (this.resourceFormat) {
            case ResourceFormat.JSON:
                this.type = new JsonResource();
                break;
            case ResourceFormat.RSS:
                this.type = new RssResource();
                break;
            case ResourceFormat.XML:
        }
    }
    fetch() {
        return __awaiter(this, void 0, void 0, function* () {
            let promise = new Promise((resolve, reject) => {
                if (!this.url.isValid()) {
                    reject({ error: "URL not valid!", url: this.url });
                }
                else {
                    request
                        .get(this.url.toString())
                        .then((res) => {
                        return this.type.convertToJson(res.text);
                    })
                        .then((json) => {
                        resolve(json);
                    })
                        .catch((reason) => {
                        reject(reason);
                    });
                }
            });
            return promise;
        });
    }
}
//# sourceMappingURL=Request.js.map