import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PublicRoutingModule } from './public-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    NavbarComponent,
    HeaderComponent,
    CoursesComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: [NavbarComponent]
})
export class PublicModule { }
