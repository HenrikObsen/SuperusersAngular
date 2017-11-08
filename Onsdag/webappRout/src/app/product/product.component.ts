import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  template: `
    <p>
      {{productID}}
    </p>
  `,
  styles: []
  
})
export class ProductComponent implements OnInit {

  productID;

  constructor(private route : ActivatedRoute) { 
    this.productID = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
