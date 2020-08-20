import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KegInfoComponent } from './keg-info/keg-info.component';
import { KegCreateComponent } from './keg-create/keg-create.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { KegWashLogCreateComponent } from './keg-wash-log-create/keg-wash-log-create.component';
import { KegSaniLogCreateComponent } from './keg-sani-log-create/keg-sani-log-create.component';
import { KegSaleLogCreateComponent } from './keg-sale-log-create/keg-sale-log-create.component';
import { KegRoutingModule } from './keg-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppBootsModule } from '../app-boots.module';

@NgModule({
  declarations: [
    KegInfoComponent,
    KegCreateComponent,
    KegListComponent,
    KegWashLogCreateComponent,
    KegSaniLogCreateComponent,
    KegSaleLogCreateComponent
  ],
  imports: [
    CommonModule,
    KegRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AppBootsModule
  ]
})
export class KegsModule { }
