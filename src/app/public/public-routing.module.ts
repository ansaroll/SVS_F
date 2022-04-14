import { NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { BodyComponent } from "./components/body/body.component";
import { ContactComponent } from "./components/contact/contact.component";
import { CoursesComponent } from "./components/courses/courses.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
    {
        path : '' , component: BodyComponent,
        children:[
          { path: '' , component: HomeComponent },
          { path: 'acceuil' , component: HomeComponent },
          { path: 'about' , component: AboutComponent },
          { path: 'courses' , component: CoursesComponent },
          { path: 'contact' , component: ContactComponent },
        ]
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PublicRoutingModule {}
