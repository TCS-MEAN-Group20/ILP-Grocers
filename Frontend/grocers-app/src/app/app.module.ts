import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UsersShopComponent } from './users-shop/users-shop.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserTicketComponent } from './user-ticket/user-ticket.component';

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
    UsersMainComponent,
    UserEditProfileComponent,
    CheckoutPageComponent,
    UserLoginComponent,
    UsersShopComponent,
    PurchaseComponent,
    UserSignUpComponent,
    UserTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
