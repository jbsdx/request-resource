import { IResourceType } from '../IResourceType';
import { toJson } from 'xml2json';
import { JsonResource } from './JsonResource';

export class XmlResource implements IResourceType {

    public async convertToJson(response: string): Promise<any>  {
        let promise = new Promise<any>((resolve, reject) => {
            try {
                let json = toJson(response);
                let jsonResource = new JsonResource();
                jsonResource.convertToJson(json)
                    .then((res) => resolve(res))
                    .catch((rea) => reject(rea));
            }
            catch(reason) {
                reject(reason);
            }
        });
        return promise;
    }

}