import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrustComponent } from './trust/trust.component';
import { AuditComponent } from './dashboard/audit/audit.component';

// import { AuditComponent } from './dashboard/audit/audit.component';
// AuditComponent


const routes: Routes = [{
  path:'',loadChildren:"./authentication/authentication.module#AuthenticationModule"},
{ path:'authentication',loadChildren:"./authentication/authentication.module#AuthenticationModule"},
{ path:'dashboard',loadChildren:"./dashboard/dashboard.module#DashboardModule"},
// {path:'trust',component:TrustComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

