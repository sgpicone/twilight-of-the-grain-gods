import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { RecipeForm } from './_models/recipe-form.model';
import { Recipe } from './_models/recipe.model';
import { GrainForm } from './grain/_models/grain-form.model';
import { Grain } from './grain/_models/grain.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeFormService {

  private recipeForm: BehaviorSubject<FormGroup | undefined> = new BehaviorSubject(
    this.fb.group(new RecipeForm(new Recipe()))
  );
  recipeForm$: Observable<FormGroup> = this.recipeForm.asObservable();

  constructor(private fb: FormBuilder) { }

  addGrain() {
    const currentRecipe = this.recipeForm.getValue();
    const currentGrainBill = currentRecipe.get('grainBill') as FormArray;

    currentGrainBill.push(
      this.fb.group(new GrainForm(new Grain()))
    );

    this.recipeForm.next(currentRecipe);
  }

  deleteGrain(index: number) {
    const currentRecipe = this.recipeForm.getValue();
    const currentGrainBill = currentRecipe.get('grainBill') as FormArray;

    currentGrainBill.removeAt(index);

    this.recipeForm.next(currentRecipe);
  }
}
