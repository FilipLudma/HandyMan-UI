export class SubCategoryModel {
    public orderSubCategoryID: number = 0;
    public subCategoryName: string = '';
    public description: string = '';
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}