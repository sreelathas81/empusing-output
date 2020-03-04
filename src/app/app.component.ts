import { Component } from '@angular/core';
import * as data from'../app/data/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

pStatus=false;
info=(data as any).default;

  id:any;
  
save(b){
  this.id=b;
}


}
