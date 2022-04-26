import { NgModule } from '@angular/core'
import { RouterModule , Routes  } from '@angular/router'
import { CalendarComponent } from './components/calendar/calendar.component'
import { ChatsComponent } from './components/chats/chats.component'
import { CoursesComponent } from './components/courses/courses.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { DatabaseComponent } from './components/database/database.component'
import { ListDoctorantComponent } from './components/list-doctorant/list-doctorant.component'
import { ListProfComponent } from './components/list-prof/list-prof.component'
import { ListStaffComponent } from './components/list-staff/list-staff.component'
import { ResumeComponent } from './components/resume/resume.component'
import { ScreenComponent } from './components/screen/screen.component'
import { SettingsComponent } from './components/settings/settings.component'

const routes: Routes = [
  {
    path : ''  , component: ScreenComponent ,
    // path : ''   , redirectTo :'' , pathMatch : 'full' ,
    children : [
      { path : '' , component: DashboardComponent },
      { path : 'dashboard' , component: DashboardComponent},
      { path : 'calendar' , component : CalendarComponent},
      { path : 'chats' , component : ChatsComponent},
      { path : 'database' , component : DatabaseComponent ,

          children : [
            { path :'' , component : ListDoctorantComponent },

            {path : 'doctorants' , component : ListDoctorantComponent ,
                  children: [
                    { path :'profil/:id' , component : ResumeComponent} ]
          },
            {path : 'profs' , component : ListProfComponent ,
                  children: [{ path :'profil/:id' , component : ResumeComponent} ] },

            {path : 'staffs' , component : ListStaffComponent ,
                  children: [{ path :'profil/:id' , component : ResumeComponent} ] },

          ]

    },
      { path : 'settings' , component : SettingsComponent},
      { path : 'courses' , component : CoursesComponent},
    ]
  },
  // { path : '' , redirectTo : '/dashboard' , pathMatch : 'full'}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
