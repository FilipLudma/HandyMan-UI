export class SubCategoryModel {
    public orderSubCategoryID: number = 0;
    public subCategoryName: string = '';
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}