import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInPageComponent } from './log-in-page/log-in-page.component'
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component'
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component'


const routes: Routes = [
  {path: "Login", component: LogInPageComponent },
  {path: "Signup", component: SignUpPageComponent},
  {path: "Dashboard", component: DashboardPageComponent},
  {path: '**', redirectTo: "/Dashboard"}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
