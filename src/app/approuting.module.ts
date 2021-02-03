import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFounComponent } from './Pages/page-not-foun/page-not-foun.component';
import { PagesRoutingModule } from './Pages/pages.routes';

const APP_ROUTING:Routes = [
  { path: '**',  redirectTo: 'Main', pathMatch: 'full'},
  { path: '**', component:  PageNotFounComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTING),
    PagesRoutingModule
  ],
  exports:[ RouterModule ]
})
export class ApproutingModule { }
