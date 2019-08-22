import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppBootsModule } from '../app-boots.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotFoundComponent, HeaderComponent, FooterComponent, NavigationComponent],
  imports: [
    CommonModule,
    AppBootsModule,
    RouterModule
  ],
  exports: [NotFoundComponent, HeaderComponent, FooterComponent, NavigationComponent]
})
export class SharedModule { }
