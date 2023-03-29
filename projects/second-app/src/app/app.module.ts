import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyLibraryComponent, MyLibraryService } from 'my-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyLibraryComponent,
  ],
  providers: [MyLibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
