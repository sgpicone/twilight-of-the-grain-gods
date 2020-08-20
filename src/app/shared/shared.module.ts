import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppBootsModule } from '../app-boots.module';
import { RouterModule } from '@angular/router';
import { EnumKeysPipe } from './enum-keys.pipe';
import { PdfService } from './pdf/pdf.service';
import { TestPaginationControlsComponent } from './test-pagination-controls/test-pagination-controls.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    EnumKeysPipe,
    TestPaginationControlsComponent
  ],
  imports: [
    CommonModule,
    AppBootsModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    EnumKeysPipe
  ],
  providers: [
    PdfService,
    EnumKeysPipe,
    TestPaginationControlsComponent
  ]
})
export class SharedModule { }
