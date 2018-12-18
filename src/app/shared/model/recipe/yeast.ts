export interface IYeast {
    name?: string;
    type?: string;
    laboratory?: string;
    productId?: string;
    
}

export class Yeast implements IYeast {
    constructor(
        public name?: string, 
        public type?: string, 
        public laboratory?: string, 
        public productId?: string, 
    ) {}
}