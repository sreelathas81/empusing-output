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
  nstatus;
  info=(data as any).default;
  public id:number=0;
  constructor()
  {
  }
   
  save(b)
  {
    this.id=parseInt(b);
    if(b==1){
      this.pStatus=true;
      this.nstatus=false;
      }if(b==10){
        this.nstatus=true;
        this.pStatus=false;
      }
      if(b<10 && b!=1){
        this.pStatus=false;
      }
    }
    prev(){
      this.id=this.id-1;
      if(this.id<1){
        this.pStatus=true;
        this.nstatus=false;
      }
      if(this.id<10 || this.id!=1 ){
        this.pStatus=false;
        this.nstatus=false;
      }
    }
    next(){
    this.id+=1;
    if(this.id==10){
        this.nstatus=true;
        this.pStatus=false;
    }
    if(this.id<10 || this.id>1){
      this.pStatus=false;
    }
    }
  }







