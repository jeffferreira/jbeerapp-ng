export interface IMashStep {
    name?: string;
    type?: string;
    stepTime?: string;
    stepTemp?: string;
    description?: string;
    infuseTemp?: string;
    displayStepTemp?: string;
    displayInfuseAmt?: string;
    
}

export class MashStep implements IMashStep {
    constructor(
        public name?: string, 
        public type?: string, 
        public stepTime?: string, 
        public stepTemp?: string, 
        public description?: string, 
        public infuseTemp?: string, 
        public displayStepTemp?: string, 
        public displayInfuseAmt?: string, 
    ) {}
}