import { Injectable } from '@angular/core';
import { LogService } from './log.service'
import { DataService } from './data.service'

@Injectable()

export class MonitorService {

  constructor(private logS: LogService, private data :DataService) { }


  method01(){
  	
  	this.logS.log("")

  	this.data.hentData().toPromise().then()

  }

}
