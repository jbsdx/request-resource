import { IResourceType } from '../resource/IResourceType';
import { ResourceFormat } from '../resource/ResourceFormat';
import { JsonResource } from '../resource/format/JsonResource';
import request from 'superagent';
import { URL } from '../resource/URL';

export class Request {

    private type: IResourceType;
    private url: URL;

    constructor(
        url: string,
        public resourceFormat: ResourceFormat) {
            this.resolveType();
            this.url = new URL(url);
    }

    private resolveType() {
        switch (this.resourceFormat) {
            case ResourceFormat.JSON:
                this.type = new JsonResource();
                break;
            case ResourceFormat.RSS:
                //this.type = new RssResource();
                break;
            case ResourceFormat.XML:
                //this.type = new XmlResource();
        }
    }
    
    public async fetch(): Promise<any> {
        let promise = new Promise<any>((resolve,reject) => {
            if (!this.url.isValid()) {
                reject({error: "URL not valid!", url: this.url});
            } else {
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
    }

}