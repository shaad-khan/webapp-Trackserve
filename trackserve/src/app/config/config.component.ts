import { Component, OnInit } from '@angular/core';
import {GConfig} from "./generalconfig";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

 initdata = new GConfig("Servername","client","ostype","Application Type");
 app:any;
 value: any;
 client:any;
 status:any;
 
  constructor(private http: HttpClient){
        console.log("Form Component Start");
        this.value=this.initdata;
    }

    submitted = false; //form not submited : default
    data: string;

  ngOnInit() {
    this.status=null;
    console.log(this.status);
const req = this.http.get('http://csmonitoring-dev.azurewebsites.net/jclient.php')
      .subscribe(
        res => {
          this.client=res;
        },
        err => {
          console.log("Error occured");
        }
      );
    
  }
  
  
  submit=function(x) {
    //this.value = form; 
   console.log(x);

   const req = this.http.post('http://nodeappservice.azurewebsites.net/gpost',x)
      .subscribe(
        res => {
          this.initdata=x;
          
         this.status=res.status; 
         console.log(this.status);
        
        },
        err => {
          console.log("Error occured");
        }
      );
  }
  submit_app=function(x) {
    //this.value = form;
    x.servername=this.initdata.servername;
      x.client=this.initdata.client;
   console.log(x);

 const req = this.http.post('http://nodeappservice.azurewebsites.net/appost',x)
      .subscribe(
        res => {
          //this.initdata=x;
          
         this.status=res.status; 
         console.log(this.status);
        
        },
        err => {
          console.log("Error occured");
        }
      );
  }
  submit_web=function(x) {
    //this.value = form;
    x.servername=this.initdata.servername;
      x.client=this.initdata.client;
   console.log(x);

 const req = this.http.post('http://nodeappservice.azurewebsites.net/webpost',x)
      .subscribe(
        res => {
          //this.initdata=x;
          
         this.status=res.status; 
         console.log(this.status);
        
        },
        err => {
          console.log("Error occured");
        }
      );
  }
   submit_db=function(x) {
    //this.value = form;
    x.servername=this.initdata.servername;
      x.client=this.initdata.client;
   console.log(x);

 const req = this.http.post('http://nodeappservice.azurewebsites.net/dbpost',x)
      .subscribe(
        res => {
          //this.initdata=x;
          
         this.status=res.status; 
         console.log(this.status);
        
        },
        err => {
          console.log("Error occured");
        }
      );
  }
  showSelected=function(x)
  {
    const req = this.http.get('http://nodeappservice.azurewebsites.net/gconfig')
      .subscribe(
        res => {
          //this.initdata=x;
        this.initdata=res;
        // this.status=res.status; 
         //console.log(this.status);
        
        },
        err => {
          console.log("Error occured");
        }
      );
      const req2 = this.http.get('http://nodeappservice.azurewebsites.net/appconfig')
      .subscribe(
        res => {
          //this.initdata=x;
        this.app1=res;
        // this.status=res.status; 
         //console.log(this.status);
        
        },
        err => {
          console.log("Error occured");
        }
      );
      const req3 = this.http.get('http://nodeappservice.azurewebsites.net/webconfig')
      .subscribe(
        res => {
          //this.initdata=x;
        this.app2=res;
        // this.status=res.status; 
         //console.log(this.status);
        
        },
        err => {
          console.log("Error occured");
        }
      );
      const req4 = this.http.get('http://nodeappservice.azurewebsites.net/dbconfig')
      .subscribe(
        res => {
          //this.initdata=x;
        this.app3=res;
        // this.status=res.status; 
         //console.log(this.status);
        
        },
        err => {
          console.log("Error occured");
        }
      );
    
  }

}
