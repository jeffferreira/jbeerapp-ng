export interface IFermentable {
    name?: string;
    type?: string;
    amount?: string;
    origin?: string;
    supplier?: string;
    displayAmount?: string;
}

export class Fermentable implements IFermentable {
    constructor(
        public name?: string, 
        public type?: string, 
        public amount?: string, 
        public origin?: string, 
        public supplier?: string, 
        public displayAmount?: string
     
    ) {}
}