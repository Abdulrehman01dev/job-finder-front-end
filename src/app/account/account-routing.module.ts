import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { RegisterComponent } from './routes/register/register.component';
import { LoginComponent } from './routes/login/login.component';
import { AccountComponent } from './account.component';

const routes: Routes = [

  {path: '', component:AccountComponent, children:[
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
