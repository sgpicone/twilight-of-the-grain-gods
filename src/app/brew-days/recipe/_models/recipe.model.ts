import { Grain } from '../grain/_models/grain.model';
import { Hop } from '../hops/_models/hop.model';
import { Salt } from '../salts/_models/salt.model';
import { Addition } from '../additions/_models/addition.model';

export class Recipe {
    name: string;
    grainBill: Array<Grain>;
    hops: Array<Hop>;
    salts: Array<Salt>;
    additions: Array<Addition>;
}
