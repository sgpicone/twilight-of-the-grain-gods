import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { GrainForm } from './grain/_models/grain-form.model';
import { Grain } from './grain/_models/grain.model';
import { Hop } from './hop/_models/hop.model';
import { HopForm } from './hop/_models/hop-form.model';
import { AdditionForm } from './addition/_models/addition-form.model';
import { Addition } from './addition/_models/addition.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.recipeForm);
  }

  get currentGrains() { return this.recipeForm.get('grains') as FormArray; }
  get currentHops() { return this.recipeForm.get('hops') as FormArray; }
  get currentAdditions() { return this.recipeForm.get('additions') as FormArray; }

  addGrain() {
    this.currentGrains.push(
      this.fb.group(new GrainForm(new Grain()))
    );
    console.log(this.recipeForm);
  }

  deleteGrain(index: number) {
    this.currentGrains.removeAt(index);
  }

  addHops() {
    this.currentHops.push(
      this.fb.group(new HopForm(new Hop()))
    );
    console.log(this.recipeForm);
  }

  deleteHop(index: number) {
    this.currentHops.removeAt(index);
  }

  addAdditions() {
    this.currentAdditions.push(
      this.fb.group(new AdditionForm(new Addition()))
    );
    console.log(this.recipeForm);
  }

  deleteAddition(index: number) {
    this.currentAdditions.removeAt(index);
  }

  // recipeFormSub: Subscription;
  // recipeFormInvalid = false;

  // name: FormControl;
  // grains: FormArray;
  // hops: FormArray;
  // salts: FormArray;
  // additions: FormArray;

  // constructor(private recipeFormService: RecipeFormService) { }

  // ngOnInit() {
  //   this.recipeFormSub = this.recipeFormService.recipeForm$
  //     .subscribe(recipe => {
  //       this.recipeForm = recipe;
  //       this.name = this.recipeForm.get('name') as FormControl;
  //       this.grains = this.recipeForm.get('grains') as FormArray;
  //       this.hops = this.recipeForm.get('hops') as FormArray;
  //       this.salts = this.recipeForm.get('salts') as FormArray;
  //       this.additions = this.recipeForm.get('additions') as FormArray;
  //     });
  // }

  // ngOnDestroy() {
  //   this.recipeFormSub.unsubscribe();
  // }

}
