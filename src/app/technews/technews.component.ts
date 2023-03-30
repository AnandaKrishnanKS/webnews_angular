import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from "../service/newsapiservices.service";

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private http:HttpClient){}

  techApiUrl:any
  //display data
  techNewsDisplay:any =[];

  ngOnInit():void{


    
  //tech api url
  this.techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f7c6d6c5fe884bd5955e83ba20885e95"


  //technews
this.http.get(this.techApiUrl).subscribe((result:any)=>{

    console.log(result);
    
      this.techNewsDisplay= result.articles;

    })
  }
}
