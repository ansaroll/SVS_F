import { NgModule } from '@angular/core'
import { RouterModule , Routes  } from '@angular/router'
import { BodyComponent } from './components/body/body.component'
import { ParametersComponent } from './components/parameters/parameters.component'

const routes: Routes = [
  { path : 'home'  , component: BodyComponent },
  { path : 'parameters' , component : ParametersComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
