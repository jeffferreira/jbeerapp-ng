export interface IStyle {
    name?: string;
    category?: string;
    type?: string;
    
}

export class Style implements IStyle {
    constructor(
        public name?: string, 
        public category?: string, 
        public type?: string, 
    ) {}
}