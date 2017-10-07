import { Component, OnInit } from '@angular/core';
import {MdDialog,MdDialogRef} from '@angular/material';
import { ServerinfoComponent } from '../serverinfo/serverinfo.component';
import { TreeModule } from 'angular-tree-component';
@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent implements OnInit {
//@ViewChild('popup1') popup1: Popup;
 // @ViewChild('popup2') popup2: Popup;
 prc:string=""
 ss:number=0;
  node=[];
children=[];

 obj=[];
 nodes=[];
nodes2 = [
    {
     
      name: 'root1',
      children: [
        {  name: 'Process 1  processing (2hours)'},
        {  name: 'child2' }
      ]
    },
    {
      
      name: 'root2',
      children: [
        {  name: 'child2.1' },
        {
          
          name: 'child2.2',
          children: [
            {  name: 'subsub' }
          ]
        }
      ]
    }
  ];
 


  constructor( public dialog: MdDialog ) { }

  ngOnInit() {
 
   this.children.push({name:'p1',time:4});
    this.children.push({name: 'p2'});
    this.children.push({name: 'p3'});
    this.children.push({name: 'p4'});
    this.children.push({name: 'p5'});
    this.children.push({name: 'p6'});
    this.children.push({name: 'p7'});
    this.children.push({name: 'p8'});
    this.children.push({name: 'p9'});
    this.children.push({name: 'p10'});
    //this.node.push({name: 'root1'});//,children:[",this.children,"]}");
    console.log(this.node,this.children);
   this.nodes.push(this.children);
  
    console.log(this.nodes2);

  }
   openDialog(v1,event) {
event.preventDefault();
     //console.log("hello");

   /*  dialogRef.afterClosed().subscribe(result => {
  console.log(`Dialog result: ${result}`); // Pizza!
});*/

//dialogRef.close('Pizza!');
  const dialogRef= this.dialog.open(ServerinfoComponent,{
      data: v1,
      height: '80%',
      width: '80%',
    });


  }
onSubmit(ob)
  {
    this.ss=1;
    this.obj.push(ob);
   // alert("hello"+t);
    //this.prc=prc;
    console.log(ob);
  }

}
