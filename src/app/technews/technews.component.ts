import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from "../service/newsapiservices.service";

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private services:NewsapiservicesService){}

  //display data
  techNewsDisplay:any =[];

  ngOnInit():void{

    this.services.techNews().subscribe((result)=>{

    console.log(result);
    
      this.techNewsDisplay= result.articles;

    })
  }
}
