import { NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { AdvertDetailsComponent } from "./components/advert-details/advert-details.component";
import { AdvertComponent } from "./components/advert/advert.component";
import { BodyComponent } from "./components/body/body.component";
// import { ContactComponent } from "./components/contact/contact.component";
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
          { path: 'advert' , component: AdvertComponent },
          { path: 'advert-details/:id' , component: AdvertDetailsComponent },
          // { path: 'contact' , component: ContactComponent },
        ]
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PublicRoutingModule {}
