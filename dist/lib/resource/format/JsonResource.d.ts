import { IResourceType } from '../IResourceType';
export declare class JsonResource implements IResourceType {
    convertToJson(response: string): Promise<any>;
}
