import { Hop } from "./hop";
import { Fermentable } from "./fermentable";
import { Yeast } from "./yeast";
import { Style } from "./style";
import { Mash } from "./mash";

export interface IRecipe {
    name?: string;
    type?: string;
    brewer?: string;
    batchSize?: string;
    boilSize?: string;
    boilTime?: string;
    eficiency?: string;
    date?: string;
    ibu?: string;
    estAbv?: string;
    displayBatchSize?: string;
    displayOg?: string;
    displayFg?: string;
    hops?: Hop[];
    fermentables?: Fermentable[];
    yeasts?: Yeast[];
    style?: Style;
    mash?: Mash;
}

export class Recipe implements IRecipe {
    constructor(
        public name?: string, 
        public type?: string, 
        public brewer?: string, 
        public batchSize?: string, 
        public boilSize?: string, 
        public boilTime?: string, 
        public eficiency?: string, 
        public date?: string, 
        public ibu?: string,
        public estAbv?: string,
        public displayBatchSize?: string, 
        public displayOg?: string, 
        public displayFg?: string, 
        public hops?: Hop[],
        public fermentables?: Fermentable[],
        public yeasts?: Yeast[],
        public style?: Style,
        public mash?: Mash
    ) {}
}