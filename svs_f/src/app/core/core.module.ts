import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreRoutingModule } from "./core-routing.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CoreRoutingModule
  ],
  exports : [
  ]
})
export class CoreModule { }
