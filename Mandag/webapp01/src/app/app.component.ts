import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  data = {
    name: 'Henrik Obsen',
    age: 38
  }

constructor(){
  	this.hentData()
  }
  
  hentData() {
  	// filen database.json findes under mappen assets
  	let databasen = "/assets/database.json"
  	fetch(databasen)
  			.then( res => res.json() )
  			.then( products => this.data = products)
  	
  }
}
