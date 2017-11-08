import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <nav>
		<li>
				<a routerLink="/about">about</a>
		</li>
		<li>
				<a routerLink="/contact">contact</a>
		</li>

		<li>
				<a routerLink="/product/{{productID}}">product nr {{productID}}</a>
		</li>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app'
  productID 

  constructor(){
  	//todo: API 
  	this.productID  = 10
  }
}
