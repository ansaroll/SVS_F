import { NgModule } from '@angular/core'
import { RouterModule , Routes  } from '@angular/router'
import { CalendarComponent } from './components/calendar/calendar.component'
import { ChatsComponent } from './components/chats/chats.component'
import { CoursesComponent } from './components/courses/courses.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { DatabaseComponent } from './components/database/database.component'
import { ScreenComponent } from './components/screen/screen.component'
import { SettingsComponent } from './components/settings/settings.component'

const routes: Routes = [
  { path : ''  , component: ScreenComponent ,
    children : [
      { path : 'dashboard' , component: DashboardComponent},
      { path : 'calendar' , component : CalendarComponent},
      { path : 'chats' , component : ChatsComponent},
      { path : 'database' , component : DatabaseComponent},
      { path : 'settings' , component : SettingsComponent},
      { path : 'courses' , component : CoursesComponent},
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
