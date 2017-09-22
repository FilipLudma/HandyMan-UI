export class OrderModel {
    public id: string;

    public firstName: string = '';
    public lastName: string = '';
    public userName: string = '';

    public category: string = '';
    public subCategory: string = '';
    public contactNumber: string = '';

    public address: string = '';
    public contactOption: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}