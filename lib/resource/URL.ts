
export class URL {

    constructor(public url: string) {}

    public isValid(): boolean {
        /* let expression = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi,
            regex = new RegExp(expression),
            valid = false;

        if (this.url.toString().match(regex)) {
            valid = true;
        }  */
        let valid = true;
        return valid;
    }

    public toString(): string {
        return this.url;
    }

}