import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// les modules
import { CoreModule } from "./core/core.module";
import { AuthModule } from "./auth/auth.module";
import { EntModule } from "./ent/ent.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    EntModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
