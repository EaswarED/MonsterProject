import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './component/employees/list/list.component';
import { CreateComponent } from './component/employees/create/create.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, ListComponent, CreateComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
