import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vrag',
  templateUrl: "./vrag.component.html",
  styles: []
})
export class VragComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  data = []; 
  
    
  
    hentData(keyword){
      // filen database.json findes under mappen assets
      //let databasen = "/assets/database.json"
  let databasen = "http://www.dykkerspots.dk/api/Search/" + keyword;
  
      fetch(databasen)
          .then( res => res.json() )
          .then( spots => this.data = spots)
      
    } 

}
