import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'

import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service'
import { LogService } from './services/log.service'
import { MonitorService } from './services/monitor.service'

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService,LogService, MonitorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
