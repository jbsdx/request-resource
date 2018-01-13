import { IResourceType } from '../IResourceType';
import { toJson } from 'xml2json';
import { XmlResource } from './XmlResource';

export class RssResource implements IResourceType {

    public async convertToJson(response: string): Promise<any>  {
        let res = new XmlResource();
        return res.convertToJson(response);
    }

}