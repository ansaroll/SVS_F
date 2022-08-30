import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ChatsComponent } from './components/chats/chats.component';
import { DatabaseComponent } from './components/database/database.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ScreenComponent } from './components/screen/screen.component';
import { BodyComponent } from './components/body/body.component';

import { CalendarModule , DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ListDoctorantComponent } from './components/list-doctorant/list-doctorant.component';
import { ListStaffComponent } from './components/list-staff/list-staff.component';
import { ListProfComponent } from './components/list-prof/list-prof.component';
import { ResumeComponent } from './components/resume/resume.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateDoctorantComponent } from './components/create-doctorant/create-doctorant.component';
import { CreateFormationComponent } from './components/create-formation/create-formation.component';
// import { FlatpickrModule } from 'angularx-flatpickr';
// import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// https://www.tiny.cloud/docs/tinymce/6/angular-cloud/
// import { EditorModule } from '@tinymce/tinymce-angular';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { SublevelMenuComponent } from './components/sidenav/sublevel-menu.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    SidenavComponent,
    BodyComponent,
    DashboardComponent,
    CoursesComponent,
    CalendarComponent,
    ChatsComponent,
    DatabaseComponent,
    SettingsComponent,
    ScreenComponent,
    ListDoctorantComponent,
    ListStaffComponent,
    ListProfComponent,
    ResumeComponent,
    CreateDoctorantComponent,
    CreateFormationComponent,
    CreateNewsComponent,
    SublevelMenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    EditorModule,
    // NgbModalModule,
    // FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
