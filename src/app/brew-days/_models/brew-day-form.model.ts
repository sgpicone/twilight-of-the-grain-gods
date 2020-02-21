import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { BrewDay } from './brew-day.model';
import { RecipeForm } from '../recipe/_models/recipe-form.model';
import { Recipe } from '../recipe/_models/recipe.model';

export class BrewDayForm {
    trialNumber = new FormControl();
    brewerName = new FormControl();
    brewDate = new FormControl();
    targetVolume = new FormControl();
    recipe: FormGroup;
    strikeVolume = new FormControl();
    strikeTemp = new FormControl();
    mashTemp = new FormControl();
    mashoutVolume = new FormControl();
    mashoutTemp = new FormControl();
    runningsGravity = new FormControl();
    preBoilVolume = new FormControl();
    preBoilGravity = new FormControl();
    boilDuration = new FormControl();
    postBoilVolume = new FormControl();
    volumeIntoFermenter = new FormControl();
    originalGravity = new FormControl();
    finalGravity = new FormControl();
    notes = new FormControl();

    constructor(brewDay: BrewDay, private fb: FormBuilder) {
        this.recipe = this.fb.group(new RecipeForm(new Recipe()));
        if (brewDay.trialNumber) {
            this.trialNumber.setValue(brewDay.trialNumber);
        }
        if (brewDay.brewDate) {
            this.brewDate.setValue(brewDay.brewDate);
        }

        this.brewDate.setValidators([Validators.required]);
        this.brewerName.setValidators([Validators.required]);
        this.targetVolume.setValidators([Validators.required]);
        this.strikeVolume.setValidators([Validators.required]);
        this.strikeTemp.setValidators([Validators.required]);
        this.mashTemp.setValidators([Validators.required]);
        this.mashoutVolume.setValidators([Validators.required]);
        this.mashoutTemp.setValidators([Validators.required]);
        this.runningsGravity.setValidators([Validators.required]);
        this.preBoilVolume.setValidators([Validators.required]);
        this.preBoilGravity.setValidators([Validators.required]);
        this.boilDuration.setValidators([Validators.required]);
        this.postBoilVolume.setValidators([Validators.required]);
        this.volumeIntoFermenter.setValidators([Validators.required]);
        this.originalGravity.setValidators([Validators.required]);
        this.finalGravity.setValidators([Validators.required]);
    }
}
