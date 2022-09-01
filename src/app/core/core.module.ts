import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreRoutingModule } from "./core-routing.module";
import { HttpClientModule } from "@angular/common/http"

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CoreRoutingModule,
    HttpClientModule
  ],
  exports : [
  ]
})
export class CoreModule { }
