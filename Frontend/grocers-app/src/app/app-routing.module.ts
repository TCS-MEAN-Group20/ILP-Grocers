import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { EmployeeDashComponent } from './employee-dash/employee-dash.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { AdmindIndexComponent } from './admind-index/admind-index.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
import { DeleteproductsComponent } from './deleteproducts/deleteproducts.component';
import { GeneratereportsComponent } from './generatereports/generatereports.component';
import { LoginComponent } from './login/login.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { ViewrequestsComponent } from './viewrequests/viewrequests.component';

import { HomeComponent } from './home/home.component';
import { UsersMainComponent } from './users-main/users-main.component';


const routes: Routes = [
  {path:"empLogin",component:EmployeeLoginComponent},
  {path:"empHome/:user",component:EmployeeDashComponent},
  {path:"changePassword/:user", component:ChangePassComponent},
  {path:"userHome/:user",component:UserDashComponent},
  {path: 'app-users-main', component: UsersMainComponent},
  {path: '', component: HomeComponent},
  {path:"adminLogin",component:LoginComponent},
  //{path:"",redirectTo:"login",pathMatch:"prefix"},
  {path:"adminHome",component:AdmindIndexComponent},
  {path:"adminHome/addProducts",component:AddproductsComponent},
  {path:"adminHome/deleteProducts",component:DeleteproductsComponent},
  {path:"adminHome/updateProducts",component:UpdateproductsComponent},
  {path:"adminHome/addEmployee",component:AddemployeeComponent},
  {path:"adminHome/deleteEmployee",component:DeleteemployeeComponent},
  {path:"adminHome/viewRequests",component:ViewrequestsComponent},
  {path:"adminHome/generateReports",component:GeneratereportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
