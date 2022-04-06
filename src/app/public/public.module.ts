import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PublicRoutingModule } from './public-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: [NavbarComponent]
})
export class PublicModule { }
