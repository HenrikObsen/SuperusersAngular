import { Component } from '@angular/core'
import { DataService } from '../services/data.service'

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Future Angular Events</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let x of events" class="col-md-5">
        <event-thumbnail [event]="x"></event-thumbnail>
      </div>
    </div>
  </div>
  `
})
export class EventsListComponent {

  events: Array<any>

  constructor(service : DataService){
    
    /*
      TIP: for at gemme data som JSON
    
      this.events = service.hentRawData()
     
      let TempData = JSON.stringify(this.events)
      console.log("Copy and Paste as JSON", TempData)
    
    */


    service
      .hentData()
      .subscribe( data => this.events = data )


  /*
      service.hentData_via_fetch().then( res => res.json()).then( data => this.events = data )
      service.hentData_via_jQuery().then( data => this.events = data )

  */

  }

}