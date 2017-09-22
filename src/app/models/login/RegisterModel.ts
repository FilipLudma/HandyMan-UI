export class RegisterModel
{
    public Email: string  = "";
    public Password: string  = "";
    public ConfirmPassword: string = "";
    
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}
