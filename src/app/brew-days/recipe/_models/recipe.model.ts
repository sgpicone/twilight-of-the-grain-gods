import { Grain } from '../grain/_models/grain.model';
import { Hop } from '../hop/_models/hop.model';
import { Salt } from '../salt/_models/salt.model';
import { Addition } from '../addition/_models/addition.model';

export class Recipe {
    name: string;
    grainBill: Array<Grain>;
    hops: Array<Hop>;
    salts: Array<Salt>;
    additions: Array<Addition>;
}
