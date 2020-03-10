import { Component, OnInit } from '@angular/core';
import * as data from'../app/data/data.json';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import * as html2pdf from 'html2pdf.js'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pStatus=false;
  nstatus: any;
  showSpinner:boolean=false;
  info=(data as any).default;
  data1: any[]=this.info;
  public id:string;
  constructor() { }
  ngOnInit(): void {

  }
  save(b,c)
  {
    this.id=b;
    this.showSpinner=c;
    setTimeout(()=>{
      this.showSpinner=false;
    },500)
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
     
      for( let i=1;i<this.data1.length;i++){
        if(this.id===this.data1[i].id){
            this.id=this.data1[i-1].id;
            if(this.id===this.data1[0].id){
              this.pStatus=true;
              this.nstatus=false;
            }
            
        }
      }
    }
 
    next(){
      for( let i=0;i<this.data1.length-1;i++){
        if(this.id===this.data1[i].id){
            this.id=this.data1[i+1].id;
            console.log(this.data1[this.data1.length-1]);
            if(this.id===this.data1[this.data1.length-1].id){
              this.nstatus=true;
              this.pStatus=false;
            }
            break;
        }
      }
    }
    
    
    download(){
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
    // Few necessary setting options
    var imgWidth = 208;
    var imgHeight = canvas.height * imgWidth / canvas.width;
 
    const contentDataURL = canvas.toDataURL('jpeg')
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
    pdf.addImage(contentDataURL, 'jpeg', 0, 0, imgWidth, imgHeight)
    pdf.save('employee.pdf'); // Generated PDF
    });
   /* const options={
      filename:'eee.pdf',
      image:{type:'png'},
      html2canvas:{},jsPDF:{orientation:'landscape'}
    };
    const content:Element=document.getElementById('contentToConvert');
    html2pdf().from(content).set(options).save();*/

    
    

  }
  }







