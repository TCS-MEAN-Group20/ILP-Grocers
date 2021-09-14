import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { EmployeeDashComponent } from './employee-dash/employee-dash.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { UserDashComponent } from './user-dash/user-dash.component';

const routes: Routes = [
  {path:"empLogin",component:EmployeeLoginComponent},
  {path:"empHome/:user",component:EmployeeDashComponent},
  {path:"changePassword/:user", component:ChangePassComponent},
  {path:"userHome/:user",component:UserDashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
