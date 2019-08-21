import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrewDaysRoutingModule } from './brew-days-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [ListComponent, CreateComponent, DetailComponent],
  imports: [
    CommonModule,
    BrewDaysRoutingModule
  ]
})
export class BrewDaysModule { }
