import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ProfilComponent } from "./components/profil/profil.component";
import { ScreenComponent } from "./components/screen/screen.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { ChatsComponent } from "./components/chats/chats.component";
import { CoursesComponent } from "./components/courses/courses.component";
import { SettingsComponent } from "./components/settings/settings.component";

const routes: Routes = [
  {
  path : '' , component : ScreenComponent ,
  children : [
    { path : '' , component : ProfilComponent },
    { path : 'profil' , component : ProfilComponent } ,
    { path : 'calendar' , component : CalendarComponent },
    { path : 'chats' , component : ChatsComponent },
    { path : 'courses' , component : CoursesComponent },
    { path : 'settings/:id' , component : SettingsComponent }
  ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DoctorantRoutingModule {}
