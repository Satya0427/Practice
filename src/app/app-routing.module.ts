import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './access/register/register.component';
import { LoginComponent } from './access/login/login.component';
import { ChangePasswordComponent } from './access/change-password/change-password.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user-register',component:RegisterComponent},
  {path:'Chnge-pswd',component:ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
