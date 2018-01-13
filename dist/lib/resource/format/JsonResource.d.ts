import { IResourceType } from '../IResourceType';
import { ResourceType } from '../ResourceType';
import { ResourceFormat } from '../ResourceFormat';
export declare class JsonResource extends ResourceType implements IResourceType {
    getType(): ResourceFormat;
    convertToJson(response: string): Promise<any>;
}
