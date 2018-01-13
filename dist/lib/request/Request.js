"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ResourceFormat_1 = require("../resource/ResourceFormat");
var JsonResource_1 = require("../resource/format/JsonResource");
var RssResource_1 = require("../resource/format/RssResource");
var XmlResource_1 = require("../resource/format/XmlResource");
var request = require("superagent");
var URL_1 = require("../resource/URL");
var Request = /** @class */ (function () {
    function Request(url, resourceFormat) {
        this.resourceFormat = resourceFormat;
        this.resolveType();
        this.url = new URL_1.URL(url);
    }
    Request.prototype.resolveType = function () {
        switch (this.resourceFormat) {
            case ResourceFormat_1.ResourceFormat.JSON:
                this.type = new JsonResource_1.JsonResource();
                break;
            case ResourceFormat_1.ResourceFormat.RSS:
                this.type = new RssResource_1.RssResource();
                break;
            case ResourceFormat_1.ResourceFormat.XML:
                this.type = new XmlResource_1.XmlResource();
        }
    };
    Request.prototype.fetch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var promise;
            return __generator(this, function (_a) {
                promise = new Promise(function (resolve, reject) {
                    if (!_this.url.isValid()) {
                        reject({ error: "URL not valid!", url: _this.url });
                    }
                    else {
                        request
                            .get(_this.url.toString())
                            .then(function (res) {
                            return _this.type.convertToJson(res.text);
                        })
                            .then(function (json) {
                            resolve(json);
                        })
                            .catch(function (reason) {
                            reject(reason);
                        });
                    }
                });
                return [2 /*return*/, promise];
            });
        });
    };
    return Request;
}());
exports.Request = Request;
//# sourceMappingURL=Request.js.map