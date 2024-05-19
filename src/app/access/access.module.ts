import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { acessRoutingModule } from './access-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AccessComponent } from './access.component';
import {HttpClientModule} from '@angular/common/http'
import { SharedModule } from '../shared/shared.module';
import { ValidationComponent } from './validation/validation.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    ChangePasswordComponent,
    AccessComponent,
    RegisterComponent,
    ValidationComponent
  ],
  imports: [
    CommonModule,
    acessRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ],
  exports:[
    LoginComponent,
    ReactiveFormsModule,
    FormsModule,
    AccessComponent,
    CommonModule
  ]
})
export class AccessModule { }
