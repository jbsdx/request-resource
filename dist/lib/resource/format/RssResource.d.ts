import { IResourceType } from '../IResourceType';
export declare class RssResource implements IResourceType {
    convertToJson(response: string): Promise<any>;
}
