import { Component } from '@angular/core';

@Component({
  selector: 'about',
  template: `
    <h1>
      {{title}}
    </h1>
  `
})
export class AboutComponent  {

 title

 constructor() { 
 	this.title = "ABOUT PAGE"
 }


}
