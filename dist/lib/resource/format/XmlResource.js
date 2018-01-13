var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { toJson } from 'xml2json';
import { JsonResource } from './JsonResource';
export class XmlResource {
    convertToJson(response) {
        return __awaiter(this, void 0, void 0, function* () {
            let promise = new Promise((resolve, reject) => {
                try {
                    let json = toJson(response);
                    let jsonResource = new JsonResource();
                    jsonResource.convertToJson(json)
                        .then((res) => resolve(res))
                        .catch((rea) => reject(rea));
                }
                catch (reason) {
                    reject(reason);
                }
            });
            return promise;
        });
    }
}
//# sourceMappingURL=XmlResource.js.map