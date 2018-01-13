import { IResourceType } from '../resource/IResourceType';
import request = require("superagent");

export class Request {

    private type: IResourceType;
    private url: URL;


    constructor(url: URL, type: IResourceType) {
        this.url = url;
        this.type= type;
    }

	public get $url(): URL {
		return this.url;
	}

	public set $url(value: URL) {
		this.url = value;
	}
    
    public isValid(): boolean {
        let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi,
            regex = new RegExp(expression),
            valid = false;

        if (this.url.toString().match(regex)) {
            valid = true;
        } 
        return valid;
    }


    public async fetch(): Promise<any> {
        let promise = new Promise<any>((resolve,reject) => {
            
            request
                .get(this.url.toString())
                .then((res) => {
                    return this.type.convertToJson(res.text);
                })
                .then((json) => {
                    console.log("Got json data", json);
                    resolve(json);
                })
                .catch((reason) => {
                    console.log(reason);
                    reject(reason);
                });
        });
       return promise;
        
    }

}