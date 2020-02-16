import { Recipe } from '../recipe/_models/recipe.model';

export class BrewDay {
    trialNumber: number;
    brewerName: string;
    brewDate: Date;
    targetVolume: number;
    recipe: Recipe;
    water: string;
    preBoilVolume: number;
    preBoilGravity: number;
    volumeIntoFermenter: number;
    originalGravity: number;
    finalGravity: number;
    notes: string;

    constructor(brewDate: Date, recipe?: Recipe) {
        this.brewDate = brewDate;
        this.recipe = recipe ? recipe : new Recipe();
    }
}
