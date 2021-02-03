import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../Components/components.module';
import { HttpClientModule } from "@angular/common/http";

import { HomeComponent } from './home/home.component';
import { PageNotFounComponent } from './page-not-foun/page-not-foun.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    HomeComponent,
    PageNotFounComponent,
    MainComponent
  ],
  exports:[
    HomeComponent,
    PageNotFounComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class PagesModule { }
