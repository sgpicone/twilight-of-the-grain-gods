import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BrewDaysRoutingModule } from './brew-days-routing.module';
import { BrewDaysListComponent } from './brew-days-list/brew-days-list.component';
import { BrewDaysCreateComponent } from './brew-days-create/brew-days-create.component';
import { BrewDaysDetailComponent } from './brew-days-detail/brew-days-detail.component';
import { SharedModule } from '../shared/shared.module';
import { GrainComponent } from './recipe/grain/grain.component';
import { HopsComponent } from './recipe/hops/hops.component';
import { SaltsComponent } from './recipe/salts/salts.component';
import { AdditionsComponent } from './recipe/additions/additions.component';
import { RecipeComponent } from './recipe/recipe.component';
import { BrewDayFormService } from './brew-day-form.service';

@NgModule({
  declarations: [
    BrewDaysListComponent,
    BrewDaysCreateComponent,
    BrewDaysDetailComponent,
    GrainComponent,
    HopsComponent,
    SaltsComponent,
    AdditionsComponent,
    RecipeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrewDaysRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BrewDayFormService]
})
export class BrewDaysModule { }
