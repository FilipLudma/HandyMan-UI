import { SubCategoryModel } from "app/models/subCategoryModel";

export class CategoryModel {
    public orderCategoryID: number = 0;
    public categoryName: string = '';
    public description: string = '';
    public categoryType: number = 0;

    public orderSubCategories: SubCategoryModel[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}