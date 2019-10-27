import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { UsersComponent } from "./pages/users/users.component";
import { LoginComponent } from "./pages/login/login.component";
import { LayoutblankComponent } from "./components/layoutblank/layoutblank.component";
import { LayoutAdminComponent } from "./components/layout-admin/layout-admin.component";
import { LoginErrorsComponent } from './pages/login-errors/login-errors.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutAdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "users", component: UsersComponent },
      { path: "create", component: CreateUserComponent }
    ]
  },
  { path: "login", component: LayoutblankComponent, children:[
    { path: "", component: LoginComponent },
    { path: "error", component: LoginErrorsComponent },
  ] },
  { path: "**", component: NotFoundComponent }
  // {path:'login', component:LoginComponent},
  // {path:'users', component:UsersComponent},
  // {path:'', component:DashboardComponent},
  // {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
