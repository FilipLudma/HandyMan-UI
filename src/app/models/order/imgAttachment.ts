export class ImgAttachment {

    public src: string = "";
    public caption: string = "";
    public thumb: string = "";

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}