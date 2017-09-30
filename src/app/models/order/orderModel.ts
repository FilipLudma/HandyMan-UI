import { ImgAttachment } from "app/models/order/imgAttachment";

export class OrderModel {
    public id: string;

    public firstName: string = '';
    public lastName: string = '';
    public userName: string = '';
    public contactNumber: string = '';
    public address: string = '';
    public email: string = '';
    public contactOption: string = '';
    public orderDate: Date = new Date();
    public orderTime: Date = new Date();

    public category: string = '';
    public subCategory: string = '';
    public description: string = '';
    public price: string = '';
    public imgAttachments: ImgAttachment[] = new Array<ImgAttachment>();

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}