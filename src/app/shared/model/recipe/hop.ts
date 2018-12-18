export interface IHop {
    name?: string;
    origin?: string;
    alpha?: string;
    amount?: string;
    user?: string;
    time?: string;
    displayTime?: string;
    displayAmount?: string;
    
}

export class Hop implements IHop {
    constructor(
        public name?: string, 
        public origin?: string, 
        public alpha?: string, 
        public amount?: string, 
        public use?: string, 
        public time?: string, 
        public displayTime?: string, 
        public displayAmount?: string
    ) {}
}