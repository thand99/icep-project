import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components Imports
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import {ResetpasswordcontComponent } from './resetpasswordcont/resetpasswordcont.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import {ProjectComponent} from './project/project.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"signup", component: SignupComponent},
  {path:"resetpassword", component: ResetpasswordComponent},
  {path: "resetpasswordcont", component: ResetpasswordcontComponent},
  {path: "createproject" , component: CreateprojectComponent},
  {path: "project", component: ProjectComponent},
  {path: "dashboard", component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
