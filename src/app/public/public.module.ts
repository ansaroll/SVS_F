import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PublicRoutingModule } from './public-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    NavbarComponent,
    CoursesComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: [NavbarComponent]
})
export class PublicModule { }
