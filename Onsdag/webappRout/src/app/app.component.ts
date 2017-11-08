import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
    <ul>
        <li><a routerLink="/about">About</a></li>
        <li><a routerLink="/contact">Contact</a></li>
        <li><a routerLink="/product/{{productID}}">Product nr 10</a></li>
    </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
  productID = 10;
}
