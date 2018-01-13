import { IResourceType } from '../IResourceType';
import { ResourceType } from '../ResourceType';
import { ResourceFormat } from '../ResourceFormat';

export class JsonResource extends ResourceType implements IResourceType {

    public getType(): ResourceFormat {
        return ResourceFormat.JSON;
    }

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