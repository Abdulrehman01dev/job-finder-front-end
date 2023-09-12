import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module'; 
import { RegisterComponent } from './routes/register/register.component';
import { AccountComponent } from './account.component';
import { LoginComponent } from './routes/login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule, 
  ]
})
export class AccountModule { }
