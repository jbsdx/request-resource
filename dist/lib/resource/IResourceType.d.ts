import { ResourceFormat } from './ResourceFormat';
export interface IResourceType {
    convertToJson(response: string): Promise<any>;
    getType(): ResourceFormat;
}
