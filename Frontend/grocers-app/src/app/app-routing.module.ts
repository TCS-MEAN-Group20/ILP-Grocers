import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersMainComponent } from './users-main/users-main.component';

const routes: Routes = [
  { path: 'app-users-main', component: UsersMainComponent },
  { path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
