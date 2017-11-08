import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  template: `
    <h1>
       {{title}}
    </h1>
  `,
  styles: []
 
})
export class ContactComponent {
  title
  constructor() { 
    this.title = "Contact Page"
  }

 
}
