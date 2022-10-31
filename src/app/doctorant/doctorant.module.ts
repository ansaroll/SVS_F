import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorantRoutingModule } from './doctorant-routing.module';
import { ProfilComponent } from './components/profil/profil.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ChatsComponent } from './components/chats/chats.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ScreenComponent } from './components/screen/screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BodyComponent } from './components/body/body.component';
import { MiniProfilComponent } from './components/mini-profil/mini-profil.component';


@NgModule({
  declarations: [
    ProfilComponent,
    SidenavComponent,
    SettingsComponent,
    ChatsComponent,
    CalendarComponent,
    CoursesComponent,
    ScreenComponent,
    BodyComponent,
    MiniProfilComponent
  ],
  imports: [
    CommonModule,
    DoctorantRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DoctorantModule { }
