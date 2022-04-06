import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParametersComponent } from './components/parameters/parameters.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BodyComponent } from './components/body/body.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ChatsComponent } from './components/chats/chats.component';
import { DatabaseComponent } from './components/database/database.component';



@NgModule({
  declarations: [
    ParametersComponent,
    HeaderComponent,
    SidenavComponent,
    SidenavComponent,
    BodyComponent,
    DashboardComponent,
    CoursesComponent,
    CalendarComponent,
    ChatsComponent,
    DatabaseComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
