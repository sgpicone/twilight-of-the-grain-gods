import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import { BrewDayFormService } from '../brew-day-form.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-brew-days-create',
  templateUrl: './brew-days-create.component.html',
  styleUrls: ['./brew-days-create.component.scss']
})
export class BrewDaysCreateComponent implements OnInit, OnDestroy {
  brewDayForm: FormGroup;
  brewDayFormSub: Subscription;
  formInvalid = false;
  recipe: FormGroup;

  constructor(private brewDayFormService: BrewDayFormService) { }

  ngOnInit() {
    this.brewDayFormSub = this.brewDayFormService.brewDayForm$
      .subscribe(brewDay => {
        this.brewDayForm = brewDay;
        this.recipe = this.brewDayForm.get('recipe') as FormGroup;
        console.log(this.brewDayForm);
        console.log(this.recipe);
      });
  }

  ngOnDestroy() {
    this.brewDayFormSub.unsubscribe();
  }

  save() {
    console.log('log saved');
    console.log(this.brewDayForm.value);
  }
}
  // brewDayForm = this.fb.group({
  //   brewName: ['', Validators.required],
  //   trialNo: [''],
  //   brewer: ['', Validators.required],
  //   brewDate: [new Date(), Validators.required],
  //   targetVolume: ['', Validators.required],
  //   recipe: this.fb.group({
  //     grains: this.fb.array([this.createGrain()]),
  //     hops: this.fb.array([this.createHop()]),
  //     salts: this.fb.array([this.createSalt()])
  //   })
  // });


  // constructor(private fb: FormBuilder) { }

  // ngOnInit() {
  // }

  // createGrain(): FormGroup {
  //   return this.fb.group({
  //     name: ['fartbox 20l', Validators.required],
  //     amount: ['', Validators.required],
  //     color: ['fuck you', Validators.required],
  //     brand: [''],
  //     notes: ['']
  //   });
  // }

  // addGrain(): void {
  //   const grainArray = this.brewDayForm.get('recipe').get('grains') as FormArray;
  //   grainArray.push(this.createGrain());
  // }

  // removeGrain(index: number): void {
  //   const grainArray = this.brewDayForm.get('recipe').get('grains') as FormArray;
  //   grainArray.removeAt(index);
  // }

  // createHop(): FormGroup {
  //   return this.fb.group({
  //     name: ['', Validators.required],
  //     amount: ['', Validators.required],
  //     alpha: ['', Validators.required],
  //     time: ['', Validators.required],
  //     ibus: [''],
  //     notes: ['']
  //   });
  // }

  // addHop(): void {
  //   const hopArray = this.brewDayForm.get('recipe').get('hops') as FormArray;
  //   hopArray.push(this.createGrain());
  // }

  // removeHop(index: number): void {
  //   const hopArray = this.brewDayForm.get('recipe').get('hops') as FormArray;
  //   hopArray.removeAt(index);
  // }

  // createSalt(): FormGroup {
  //   return this.fb.group({
  //     name: ['', Validators.required],
  //     amount: ['', Validators.required],
  //     notes: ['']
  //   });
  // }

  // addSalt(): void {
  //   const saltArray = this.brewDayForm.get('recipe').get('salts') as FormArray;
  //   saltArray.push(this.createGrain());
  // }

  // removeSalt(index: number): void {
  //   const saltArray = this.brewDayForm.get('recipe').get('salts') as FormArray;
  //   saltArray.removeAt(index);
  // }

  // click() {
  //   console.log(this.grains);
  // }

  // get brewName() { return this.brewDayForm.get('brewName'); }
  // get trialNo() { return this.brewDayForm.get('trialNo'); }
  // get brewer() { return this.brewDayForm.get('brewer'); }
  // get brewDate() { return this.brewDayForm.get('brewDate'); }
  // get targetVolume() { return this.brewDayForm.get('targetVolume'); }
  // get grains() { return this.brewDayForm.get('recipe').get('grains'); }
  // get hops() { return this.brewDayForm.get('recipe').get('hops'); }
  // get salts() { return this.brewDayForm.get('recipe').get('salts'); }
