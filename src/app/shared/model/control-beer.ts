export interface IControlBeer {
    id?: number;
    resistor?: boolean;
    pump?: boolean;
    temperature?: number;
    time?: number;
}

export class ControlBeer implements IControlBeer {
    constructor(
        public resistor?: boolean, 
        public pump?: boolean,
        public temperature?: number,
        public time?: number
    ) {}
}