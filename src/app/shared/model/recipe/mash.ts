import { MashStep } from "./mash-step";

export interface IMash {
    name?: string;
    ph?: string;
    mashSteps?: MashStep[];
}

export class Mash implements IMash {
    constructor(
        public name?: string, 
        public ph?: string, 
        public mashSteps?: MashStep[]
    ) {}
}