import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { KegCreateComponent } from './keg-create/keg-create.component';
import { KegInfoComponent } from './keg-info/keg-info.component';
import { KegWashLogCreateComponent } from './keg-wash-log-create/keg-wash-log-create.component';
import { KegSaniLogCreateComponent } from './keg-sani-log-create/keg-sani-log-create.component';
import { KegSaleLogCreateComponent } from './keg-sale-log-create/keg-sale-log-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: KegListComponent },
  { path: 'create', component: KegCreateComponent },
  { path: 'detail/:id', component: KegInfoComponent },
  { path: 'wash-entry/create', component: KegWashLogCreateComponent},
  { path: 'sani-entry/create', component: KegSaniLogCreateComponent},
  { path: 'sale-entry/create', component: KegSaleLogCreateComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KegRoutingModule { }
