import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrewDaysListComponent } from './brew-days-list/brew-days-list.component';
import { BrewDaysCreateComponent } from './brew-days-create/brew-days-create.component';
import { BrewDaysDetailComponent } from './brew-days-detail/brew-days-detail.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: BrewDaysListComponent },
  { path: 'create', component: BrewDaysCreateComponent },
  { path: 'detail/:id', component: BrewDaysDetailComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrewDaysRoutingModule { }
