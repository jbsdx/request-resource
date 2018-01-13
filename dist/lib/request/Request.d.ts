import { IResourceType } from '../resource/IResourceType';
export declare class Request {
    private type;
    private url;
    constructor(url: URL, type: IResourceType);
    $url: URL;
    isValid(): boolean;
    fetch(): Promise<any>;
}
