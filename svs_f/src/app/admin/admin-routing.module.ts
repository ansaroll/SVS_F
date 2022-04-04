import { NgModule } from '@angular/core'
import { RouterModule , Routes  } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { ParametersComponent } from './components/parameters/parameters.component'

const routes: Routes = [
  { path : 'home'  , component: HomeComponent },
  { path : 'parameters' , component : ParametersComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
