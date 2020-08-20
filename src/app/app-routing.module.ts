import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'brew-days', pathMatch: 'full' },
  { path: 'brew-days', loadChildren: './brew-days/brew-days.module#BrewDaysModule' },
  { path: 'kegs', loadChildren: './kegs/kegs.module#KegsModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
