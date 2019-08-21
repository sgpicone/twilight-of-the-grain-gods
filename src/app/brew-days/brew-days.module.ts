import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrewDaysRoutingModule } from './brew-days-routing.module';
import { BrewDaysListComponent } from './brew-days-list/brew-days-list.component';
import { BrewDaysCreateComponent } from './brew-days-create/brew-days-create.component';
import { BrewDaysDetailComponent } from './brew-days-detail/brew-days-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BrewDaysListComponent, BrewDaysCreateComponent, BrewDaysDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrewDaysRoutingModule
  ]
})
export class BrewDaysModule { }
