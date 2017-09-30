export class ImgAttachment {

    public src: any = "";
    public caption: any = "";
    public thumb: any = "";

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}