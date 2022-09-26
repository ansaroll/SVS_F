import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard'

const routes: Routes = [
  {
    path : '' ,
    loadChildren: () => import('./public/public.module')
                              .then(m => m.PublicModule)
  },
  {
    path: 'auth' ,
    loadChildren: () => import('./auth/auth.module')
                              .then(m => m.AuthModule)
  },
  {
    path : 'admin',
    loadChildren: () => import('./admin/admin.module')
                              .then(m => m.AdminModule)
                              , canActivate:[AuthGuard]
  },
  {
    path : 'doctorant' ,
    loadChildren: () => import('./doctorant/doctorant.module')
                              .then(m => m.DoctorantModule)
                              , canActivate:[AuthGuard]
  }
  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
