export class Config {
    public BaseUrl: String = 'http://localhost:5000/api/Orders';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    };
}