import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { RegisterComponent } from './Component/register/register.component';
import { VerifyEmailComponent } from './Component/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';

const routes: Routes = [
  
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component : LoginComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'varify-email', component : VerifyEmailComponent},
  {path: 'forgot-password', component : ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
