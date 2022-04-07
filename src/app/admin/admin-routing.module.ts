import { NgModule } from '@angular/core'
import { RouterModule , Routes  } from '@angular/router'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { ScreenComponent } from './components/screen/screen.component'

const routes: Routes = [
  { path : ''  , component: ScreenComponent , pathMatch: 'full' },
  { path : 'dashboard' , component: DashboardComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
