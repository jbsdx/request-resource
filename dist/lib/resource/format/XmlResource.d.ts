import { IResourceType } from '../IResourceType';
export declare class XmlResource implements IResourceType {
    convertToJson(response: string): Promise<any>;
}
