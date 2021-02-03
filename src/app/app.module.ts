import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './Pages/pages.module';

import { AppComponent } from './Root/app.component';
import { ApproutingModule } from './approuting.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ApproutingModule,
    BrowserModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
