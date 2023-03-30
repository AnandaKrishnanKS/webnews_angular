import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { NewsapiservicesService } from "../service/newsapiservices.service";

@Component({
  selector: 'app-bussinessnews',
  templateUrl: './bussinessnews.component.html',
  styleUrls: ['./bussinessnews.component.css']
})
export class BussinessnewsComponent implements OnInit {

  constructor(private http:HttpClient){}

  bussinessApiUrl:any
  //display data
  bussinessNewsDisplay:any =[];

  ngOnInit():void{

     //bussiness api url
  this.bussinessApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f7c6d6c5fe884bd5955e83ba20885e95"

  // bussinessnews
   
this.http.get(this.bussinessApiUrl).subscribe((result:any)=>{

    console.log(result);
    
      this.bussinessNewsDisplay= result.articles;

    })
  }

}
