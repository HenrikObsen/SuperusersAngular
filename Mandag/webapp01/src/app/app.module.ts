import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VragComponent } from './vrag/vrag.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VragComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
