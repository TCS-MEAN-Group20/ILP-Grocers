import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdmindIndexComponent } from './admind-index/admind-index.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { DeleteproductsComponent } from './deleteproducts/deleteproducts.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
import { ViewrequestsComponent } from './viewrequests/viewrequests.component';
import { GeneratereportsComponent } from './generatereports/generatereports.component';
import { EmployeeDashComponent } from './employee-dash/employee-dash.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { UserDashComponent } from './user-dash/user-dash.component';

import { HomeComponent } from './home/home.component';
import { UsersMainComponent } from './users-main/users-main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmindIndexComponent,
    AddproductsComponent,
    DeleteproductsComponent,
    UpdateproductsComponent,
    AddemployeeComponent,
    DeleteemployeeComponent,
    ViewrequestsComponent,
    GeneratereportsComponent,
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
