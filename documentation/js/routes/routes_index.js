var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","loadChildren":"./public/public.module#PublicModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/public/public-routing.module.ts","module":"PublicRoutingModule","children":[{"path":"","component":"BodyComponent","children":[{"path":"","component":"HomeComponent"},{"path":"acceuil","component":"HomeComponent"},{"path":"about","component":"AboutComponent"},{"path":"courses","component":"CoursesComponent"}]}],"kind":"module"}],"module":"PublicModule"}]},{"path":"auth","loadChildren":"./auth/auth.module#AuthModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/auth/auth-routing.module.ts","module":"AuthRoutingModule","children":[{"path":"","redirectTo":"login","pathMatch":"full"},{"path":"login","component":"LoginComponent"},{"path":"signup","component":"SignupComponent"},{"path":"logout","component":"LogoutComponent"}],"kind":"module"}],"module":"AuthModule"}]},{"path":"admin","loadChildren":"./admin/admin.module#AdminModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/admin/admin-routing.module.ts","module":"AdminRoutingModule","children":[{"path":"","component":"ScreenComponent","children":[{"path":"","component":"DashboardComponent"},{"path":"dashboard","component":"DashboardComponent"},{"path":"calendar","component":"CalendarComponent"},{"path":"chats","component":"ChatsComponent"},{"path":"database","component":"DatabaseComponent","children":[{"path":"","component":"ListDoctorantComponent"},{"path":"doctorants","component":"ListDoctorantComponent","children":[{"path":"profil/:id","component":"ResumeComponent"}]},{"path":"profs","component":"ListProfComponent","children":[{"path":"profil/:id","component":"ResumeComponent"}]},{"path":"staffs","component":"ListStaffComponent","children":[{"path":"profil/:id","component":"ResumeComponent"}]}]},{"path":"settings","component":"SettingsComponent"},{"path":"courses","component":"CoursesComponent"},{"path":"createdoctorant","component":"CreateDoctorantComponent"},{"path":"createformation","component":"CreateFormationComponent"},{"path":"createnews","component":"CreateNewsComponent"}]}],"kind":"module"}],"module":"AdminModule"}]},{"path":"doctorant","loadChildren":"./doctorant/doctorant.module#DoctorantModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/doctorant/doctorant-routing.module.ts","module":"DoctorantRoutingModule","children":[{"path":"","component":"ScreenComponent","children":[{"path":"","component":"ProfilComponent"},{"path":"profil","component":"ProfilComponent"},{"path":"calendar","component":"CalendarComponent"},{"path":"chats","component":"ChatsComponent"},{"path":"courses","component":"CoursesComponent"},{"path":"settings","component":"SettingsComponent"}]}],"kind":"module"}],"module":"DoctorantModule"}]}],"kind":"module"},{"name":"routes","filename":"src/app/core/core-routing.module.ts","module":"CoreRoutingModule","children":[],"kind":"module"}]}
