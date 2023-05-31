import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {BoardPageComponent} from "./features/board-page/board-page.component";
import {DashboardComponent} from "./features/dashboard/dashboard.component";
import {RegisterComponent} from "./features/register/register.component";
import {LoginComponent} from "./features/login/login.component";
import {HomeComponent} from "./features/home/home.component";
import {LayoutComponent} from "./layout/layout.component";

import {LoggedInGuard} from "./shared/guards/logged-in.guard";
import {AuthGuard} from "./shared/guards/auth.guard";


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', component: HomeComponent, canActivate: [LoggedInGuard]},
      {path: 'login', component: LoginComponent, canActivate: [LoggedInGuard]},
      {path: 'register', component: RegisterComponent, canActivate: [LoggedInGuard]},

      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      {path: 'board/:id', component: BoardPageComponent, canActivate: [AuthGuard]},
    ]
  },
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
