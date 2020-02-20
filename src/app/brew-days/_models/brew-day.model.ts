import { Recipe } from '../recipe/_models/recipe.model';
import { Water } from '../water/_models/water.model';

export class BrewDay {
    trialNumber: number;
    brewerName: string;
    brewDate: Date;
    targetBatchVolume: number;
    recipe: Recipe;
    water: Water;
    strikeVolume: number;
    strikeTemp: number;
    mashTemp: number;
    mashoutVolume: number;
    mashoutTemp: number;
    runningsGravity: number;
    preBoilVolume: number;
    preBoilGravity: number;
    boilDuration: number;
    postBoilVolume: number;
    volumeIntoFermenter: number;
    originalGravity: number;
    finalGravity: number;
    notes: string;

    constructor(brewDate: Date, recipe?: Recipe) {
        this.brewDate = brewDate;
        this.recipe = recipe ? recipe : new Recipe();
    }
}
