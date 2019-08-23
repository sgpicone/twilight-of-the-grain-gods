import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BrewDayForm } from './_models/brew-day-form.model';
import { BrewDay } from './_models/brew-day.model';
import { RecipeForm } from './recipe/_models/recipe-form.model';
import { Recipe } from './recipe/_models/recipe.model';

@Injectable()
export class BrewDayFormService {

  private brewDayForm: BehaviorSubject<FormGroup | undefined> = new BehaviorSubject(
    this.fb.group(new BrewDayForm(new BrewDay(new Date()), this.fb))
  );

  brewDayForm$: Observable<FormGroup> = this.brewDayForm.asObservable();

  constructor(private fb: FormBuilder) { }

  addRecipe() {
    const currentForm = this.brewDayForm.getValue();
    currentForm.get('recipe').setValue(
      new RecipeForm(new Recipe())
    );

    this.brewDayForm.next(currentForm);
  }

}
