import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UsersMainComponent } from './users-main/users-main.component';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';

import { EmployeeDashComponent } from './employee-dash/employee-dash.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { ChangePassComponent } from './change-pass/change-pass.component';

import { UserDashComponent } from './user-dash/user-dash.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashComponent,
    EmployeeDashComponent,
    EmployeeLoginComponent,
    ChangePassComponent,
    UserDashComponent,
    HomeComponent,
    UsersMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
