import { NgModule } from '@angular/core'
import { RouterModule , Routes  } from '@angular/router'
import { BodyComponent } from './components/body/body.component'
import { SettingsComponent } from './components/settings/settings.component'

const routes: Routes = [
  { path : ''  , component: BodyComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
