import { FormControl, FormArray } from '@angular/forms';
import { Recipe } from './recipe.model';
import { GrainForm } from '../grain/_models/grain-form.model';
import { HopForm } from '../hop/_models/hop-form.model';
import { SaltForm } from '../salt/_models/salt-form.model';
import { AdditionForm } from '../addition/_models/addition-form.model';

export class RecipeForm {
    name = new FormControl();
    grains = new FormArray([]);
    hops = new FormArray([]);
    salts = new FormArray([]);
    additions = new FormArray([]);

    constructor(recipe: Recipe) {
        if (recipe.name) {
            this.name.setValue(recipe.name);
        }

        if (recipe.grains) {
            this.grains.setValue(recipe.grains);
        } else {
            this.grains.setValue(new Array<GrainForm>());
        }

        if (recipe.hops) {
            this.hops.setValue(recipe.hops);
        } else {
            this.hops.setValue(new Array<HopForm>());
        }

        if (recipe.salts) {
            this.salts.setValue(recipe.salts);
        } else {
            this.salts.setValue(new Array<SaltForm>());
        }

        if (recipe.additions) {
            this.additions.setValue(recipe.additions);
        } else {
            this.additions.setValue(new Array<AdditionForm>());
        }
    }
}
