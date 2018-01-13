export interface IResourceType {
    convertToJson(response: string): Promise<any>;
}
