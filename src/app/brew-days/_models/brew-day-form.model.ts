import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { BrewDay } from './brew-day.model';
import { RecipeForm } from '../recipe/_models/recipe-form.model';
import { Recipe } from '../recipe/_models/recipe.model';

export class BrewDayForm {
    trialNumber = new FormControl();
    brewerName = new FormControl();
    brewDate = new FormControl();
    targetVolume = new FormControl();
    recipe: FormGroup;
    preBoilVolume = new FormControl();
    preBoilGravity = new FormControl();
    volumeIntoFermenter = new FormControl();
    originalGravity = new FormControl();
    notes = new FormControl();

    constructor(brewDay: BrewDay, private fb: FormBuilder) {
        this.recipe = this.fb.group(new RecipeForm(new Recipe()));
        if (brewDay.trialNumber) {
            this.trialNumber.setValue(brewDay.trialNumber);
        }
        if (brewDay.brewDate) {
            this.brewDate.setValue(brewDay.brewDate);
        }
    }
}
