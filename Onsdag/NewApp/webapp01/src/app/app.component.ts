import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'hello',
  templateUrl: './app.component.html',
  styleUrls: ['./app.style.css']
})
export class AppComponent {
   title = 'app';
   addresse = "https://couchdb.itacademy.dk/kursus/angular5"
   data 


   constructor( private http: HttpClient ) {}

   hentData(){
     // this.hentData_using_observables_API()

       this.hentData_using_promise_API()
   }


   /*
    * For moderne browsere 
    */
   hentData_using_promise_API(){
     fetch(this.addresse)
         .then( response => response.json()  )
         .then( productliste => this.data = productliste.products )
   }


   /*
    *  aht. IE11 
    *
    */
  hentData_using_observables_API(){
      this.http.get( this.addresse )
          .subscribe(  (productliste:any) => this.data = productliste.products  )
  }


}


