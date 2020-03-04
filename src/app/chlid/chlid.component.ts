import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import  *  as  data  from  '../data/data.json';


@Component({
  selector: 'app-chlid',
  templateUrl: './chlid.component.html',
  styleUrls: ['./chlid.component.css']
})
export class ChlidComponent implements OnInit {
@Output() data:any=new EventEmitter();
info=(data as any).default;
  constructor() { }

  ngOnInit() {
  }
  showData(a){
    this.data.emit(a);
  }

}
