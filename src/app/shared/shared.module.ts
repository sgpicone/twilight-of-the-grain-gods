import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppBootsModule } from '../app-boots.module';

@NgModule({
  declarations: [NotFoundComponent, HeaderComponent, FooterComponent, NavigationComponent],
  imports: [
    CommonModule
  ],
  exports: [NotFoundComponent, HeaderComponent, FooterComponent, NavigationComponent]
})
export class SharedModule { }
