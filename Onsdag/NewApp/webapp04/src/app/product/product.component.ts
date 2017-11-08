import { Component } 		from '@angular/core';
import { ActivatedRoute } 	from '@angular/router';


@Component({
  selector: 'product',
  template: `
    <h1>
      product nummer er = {{productID}}
    </h1>
  `,
  styles: []
  
})
export class ProductComponent {

	productID
 
  constructor(private route: ActivatedRoute) { 
  	this.productID =  route.snapshot.paramMap.get('productID')
  }

   
}
