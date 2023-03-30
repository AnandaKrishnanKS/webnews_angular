import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import{ NewsapiservicesService }from '../service/newsapiservices.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private services:NewsapiservicesService,private http:HttpClient){}

  newsApiUrl:any
  //display data
  topHeadingDisplay:any =[];

  ngOnInit():void{

     //news api url
  this.newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=f7c6d6c5fe884bd5955e83ba20885e95"

  
  this.http.get(this.newsApiUrl).subscribe((result:any)=>{

    console.log(result);
    
      this.topHeadingDisplay= result.articles;

    })
  }

}
