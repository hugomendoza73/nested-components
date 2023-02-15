import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { HeadersComponent } from './components/headers/headers.component';
import { RowTemplateComponent } from './components/row-template/row-template.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeadersComponent,
    RowTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
