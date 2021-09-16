import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChangePassComponent } from './change-pass/change-pass.component';
import { EmployeeDashComponent } from './employee-dash/employee-dash.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';

import { UserDashComponent } from './user-dash/user-dash.component';

import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { HomeComponent } from './home/home.component';
import { UsersMainComponent } from './users-main/users-main.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UsersShopComponent } from './users-shop/users-shop.component';



const routes: Routes = [
  {path:"empLogin",component:EmployeeLoginComponent},
  {path:"empHome/:user",component:EmployeeDashComponent},
  {path:"changePassword/:user", component:ChangePassComponent},
  {path:"userHome/:user",component:UserDashComponent},
  {path: 'app-users-main', component: UsersMainComponent},
  {path: '', component: HomeComponent},
  {path:"editUserProfile/:user",component:UserEditProfileComponent},
  {path:"userCheckout/:user", component:CheckoutPageComponent},
  {path:"userLogin",component:UserLoginComponent},
  {path:"adminLogin",component:AdminLoginComponent},
  {path:"adminHome",component:AdminDashComponent},
  {path:"userShop/:user",component:UsersShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
