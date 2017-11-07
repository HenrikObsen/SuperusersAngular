import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vrag',
  template: `
  <button (click)="hentData()">HENT ALLE VRAG</button>
  <p>Antal varer {{data?.length}}</p>
  <div *ngFor="let spot of data">
    <p><b>{{spot.ID}} {{spot.Navn}}</b> :<a href="http://maps.google.com/maps?q={{spot.Decimal}}" target="_blank">{{spot.Decimal}}</a><br/>
    <img *ngIf="spot.Billede != 'NoImage.png'" src="http://www.dykkerspots.dk/Billeder/{{spot.Billede}}" style="width:200px;"/>
    </p>
  </div>
  `,
  styles: []
})
export class VragComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  data = []; 
  
    
  
    hentData(){
      // filen database.json findes under mappen assets
      //let databasen = "/assets/database.json"
  let databasen = "http://www.dykkerspots.dk/api/Map/AdmGetAll"
  
      fetch(databasen)
          .then( res => res.json() )
          .then( spots => this.data = spots)
      
    } 

}
