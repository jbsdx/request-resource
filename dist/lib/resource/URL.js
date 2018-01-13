export class URL {
    constructor(url) {
        this.url = url;
    }
    isValid() {
        /* let expression = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi,
            regex = new RegExp(expression),
            valid = false;

        if (this.url.toString().match(regex)) {
            valid = true;
        }  */
        let valid = true;
        return valid;
    }
    toString() {
        return this.url;
    }
}
//# sourceMappingURL=URL.js.map