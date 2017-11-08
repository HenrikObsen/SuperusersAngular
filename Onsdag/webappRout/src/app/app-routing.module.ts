import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
	{
	 	path: '',
	 	children : [] 
	},
	{
		// /about	
		path : 'about',
		component : AboutComponent
	},
	{
		// /contact	
		path : 'contact',
		component : ContactComponent
	},
	{
		// /product/:id  /product/1    /product/su0072	
		path : 'product/:id',
		component : ProductComponent
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
	

}
