import { NgModule } from '@angular/core'
import { RouterModule , Routes  } from '@angular/router'
import { CalendarComponent } from './components/body/calendar/calendar.component'
import { ChatsComponent } from './components/chats/chats.component'
import { CoursesComponent } from './components/courses/courses.component'
import { CreateDoctorantComponent } from './components/create-doctorant/create-doctorant.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { CreateFormationComponent } from './components/create-formation/create-formation.component'
import { DatabaseComponent } from './components/database/database.component'
import { ListDoctorantComponent } from './components/list-doctorant/list-doctorant.component'
import { ListProfComponent } from './components/list-prof/list-prof.component'
import { ListStaffComponent } from './components/list-staff/list-staff.component'
import { ResumeComponent } from './components/resume/resume.component'
import { ScreenComponent } from './components/screen/screen.component'
import { SettingsComponent } from './components/settings/settings.component'
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { ProfilComponent } from "./components/profil/profil.component";



const routes: Routes = [
  {
    path : ''  , component: ScreenComponent ,
    // path : ''   , redirectTo :'' , pathMatch : 'full' ,
    children : [
      { path : '' , component: DashboardComponent },
      { path : 'dashboard' , component: DashboardComponent},
      { path : 'calendar' , component : CalendarComponent},
      { path : 'chats' , component : ChatsComponent},
      { path : 'profil/:id/:role' , component: ProfilComponent},
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
      { path : 'create-user' , component : CreateDoctorantComponent},
      { path : 'create-formation' , component : CreateFormationComponent},
      { path : 'create-formation/:id' , component : CreateFormationComponent},
      { path : 'createnews' , component : CreateNewsComponent},
    ]
  },
  // { path : '' , redirectTo : '/dashboard' , pathMatch : 'full'}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
