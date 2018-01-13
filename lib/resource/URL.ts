
export class URL {

    constructor(public url: string) {}

    public isValid(): boolean {
        let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi,
            regex = new RegExp(expression),
            valid = false;

        if (this.url.toString().match(regex)) {
            valid = true;
        } 
        return valid;
    }

}