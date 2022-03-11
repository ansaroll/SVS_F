import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreRoutingModule } from "./core-routing.module";

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CoreRoutingModule
  ],
  exports : [
    HeaderComponent
  ]
})
export class CoreModule { }
