export class imgBlob {

    public fileName: string;
    public imgBase64: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}