import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BrewDaysRoutingModule } from './brew-days-routing.module';
import { BrewDaysListComponent } from './brew-days-list/brew-days-list.component';
import { BrewDaysCreateComponent } from './brew-days-create/brew-days-create.component';
import { BrewDaysDetailComponent } from './brew-days-detail/brew-days-detail.component';
import { SharedModule } from '../shared/shared.module';
import { GrainComponent } from './recipe/grain/grain.component';
import { HopComponent } from './recipe/hop/hop.component';
import { SaltComponent } from './recipe/salt/salt.component';
import { AdditionComponent } from './recipe/addition/addition.component';
import { RecipeComponent } from './recipe/recipe.component';
import { BrewDayFormService } from './brew-day-form.service';

@NgModule({
  declarations: [
    BrewDaysListComponent,
    BrewDaysCreateComponent,
    BrewDaysDetailComponent,
    GrainComponent,
    HopComponent,
    SaltComponent,
    AdditionComponent,
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
