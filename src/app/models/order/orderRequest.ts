export class OrderRequest{

    constructor(    
        public id: number,
        public address: string = '',
        public category: string = '',
        public description: string = '',
        public mobileNumber: string = ''){ }
}