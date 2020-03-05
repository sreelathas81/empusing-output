import { Component, OnInit } from '@angular/core';
import * as data from'../app/data/data.json';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    
  }
  pStatus=false;
  ppStatus;
  nstatus;
  info=(data as any).default;
  public id:number=0;
  public iidd:number;
  constructor()
  {
  }
   
  save(b)
  {
    this.id=b;
    console.log(b);
    if(b==1){
      this.pStatus=true;
      this.nstatus=false;
      }if(b==10){
        this.nstatus=true;
        this.pStatus=false;
      }
    }
    prev(){

    }
    next(){
      
    }
  }







