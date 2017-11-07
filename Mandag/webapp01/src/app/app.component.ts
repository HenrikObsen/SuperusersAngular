import { Component } from '@angular/core';

declare var fetch : any; 
/*
	@ decoration
	<hello> 
		import './app.component.html'
		import './app.style.css'
		import AppComponent.js

	</hello>
*/
@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.style.css']

})
export class AppComponent {
title = 'Vrag appen';
  
 }


