import { IResourceType } from '../IResourceType';
import { ResourceFormat } from '../ResourceFormat';

export class JsonResource implements IResourceType {

    public async convertToJson(response: string): Promise<any>  {
        let promise = new Promise<any>((resolve, reject) => {
            try {
                let json = JSON.parse(response);
                resolve(json);
            } 
            catch(reason) {
                reject(reason);
            }
        });
        return promise;
    }

}