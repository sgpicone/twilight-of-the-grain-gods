import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RecipeFormService } from './recipe-form.service';
import { GrainForm } from './grain/_models/grain-form.model';
import { Grain } from './grain/_models/grain.model';

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

  addGrain() {
      const currentGrainBill = this.recipeForm.get('grainBill') as FormArray;

      currentGrainBill.push(
        this.fb.group(new GrainForm(new Grain()))
      );
    console.log(this.recipeForm);
  }

  deleteGrain(index: number) {
    // this.recipeFormService.deleteGrain(index);
  }

  // recipeFormSub: Subscription;
  // recipeFormInvalid = false;

  // name: FormControl;
  // grainBill: FormArray;
  // hops: FormArray;
  // salts: FormArray;
  // additions: FormArray;

  // constructor(private recipeFormService: RecipeFormService) { }

  // ngOnInit() {
  //   this.recipeFormSub = this.recipeFormService.recipeForm$
  //     .subscribe(recipe => {
  //       this.recipeForm = recipe;
  //       this.name = this.recipeForm.get('name') as FormControl;
  //       this.grainBill = this.recipeForm.get('grainBill') as FormArray;
  //       this.hops = this.recipeForm.get('hops') as FormArray;
  //       this.salts = this.recipeForm.get('salts') as FormArray;
  //       this.additions = this.recipeForm.get('additions') as FormArray;
  //     });
  // }

  // ngOnDestroy() {
  //   this.recipeFormSub.unsubscribe();
  // }

}
