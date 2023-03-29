import { Component,OnInit } from '@angular/core';
import { NewsapiservicesService } from "../service/newsapiservices.service";

@Component({
  selector: 'app-bussinessnews',
  templateUrl: './bussinessnews.component.html',
  styleUrls: ['./bussinessnews.component.css']
})
export class BussinessnewsComponent implements OnInit {

  constructor(private services:NewsapiservicesService){}

  //display data
  bussinessNewsDisplay:any =[];

  ngOnInit():void{

    this.services.bussinessNews().subscribe((result)=>{

    console.log(result);
    
      this.bussinessNewsDisplay= result.articles;

    })
  }

}
