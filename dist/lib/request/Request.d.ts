import { ResourceFormat } from '../resource/ResourceFormat';
export declare class Request {
    resourceFormat: ResourceFormat;
    private type;
    private url;
    constructor(url: string, resourceFormat: ResourceFormat);
    private resolveType();
    fetch(): Promise<any>;
}
