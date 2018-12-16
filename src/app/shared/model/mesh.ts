export interface IMesh {
    id?: number;
    resistor?: boolean;
    pump?: boolean;
    temperature?: number;
    time?: number;
}

export class Mesh implements IMesh {
    constructor(
        public resistor?: boolean, 
        public pump?: boolean,
        public temperature?: number,
        public time?: number
    ) {}
}