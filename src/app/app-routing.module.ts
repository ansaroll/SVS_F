import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  },
  {
    path : 'doctorant' ,
    loadChildren: () => import('./doctorant/doctorant.module')
                              .then(m => m.DoctorantModule)
  }
  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
