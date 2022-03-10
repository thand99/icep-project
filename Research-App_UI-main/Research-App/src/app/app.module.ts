import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ResetpasswordcontComponent } from './resetpasswordcont/resetpasswordcont.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import { ProjectComponent } from './project/project.component';
import {HttpClientModule} from '@angular/common/http';
import { ConnComponent } from './src/app/conn/conn.component';
import { AuthService } from './src/app/services/auth/auth.service';
import { GuidelinesService } from './src/app/services/guidelines/guidelines.service';
import { NotesService } from './src/app/services/notes/notes.service';
import { ProjectService } from './src/app/services/project/project.service';
import { ReviewService } from './src/app/services/review/review.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    SettingsComponent,
    ResetpasswordComponent,
    ResetpasswordcontComponent,
    CreateprojectComponent,
    ProjectComponent,
    HttpClientModule,
    ConnComponent,
    AuthService,
    GuidelinesService,
    NotesService,
    ProjectService,
    ReviewService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
