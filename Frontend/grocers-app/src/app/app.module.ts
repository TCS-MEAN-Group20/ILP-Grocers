import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashComponent } from './employee-dash/employee-dash.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { UserDashComponent } from './user-dash/user-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashComponent,
    EmployeeLoginComponent,
    ChangePassComponent,
    UserDashComponent
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
