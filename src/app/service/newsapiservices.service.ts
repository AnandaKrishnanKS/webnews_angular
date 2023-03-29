import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(public http:HttpClient) { }

  //news api url
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=f7c6d6c5fe884bd5955e83ba20885e95"

  
  //topheading()
  topHeading():Observable<any>
  {
    return this.http.get(this.newsApiUrl)
  }


  //tech api url
  techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f7c6d6c5fe884bd5955e83ba20885e95"


  //technews
  techNews():Observable<any>{
    return this.http.get(this.techApiUrl)
  }


  //bussiness api url
  bussinessApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f7c6d6c5fe884bd5955e83ba20885e95"

  // bussinessnews
   
  bussinessNews():Observable<any>{
    return this.http.get(this.bussinessApiUrl)
  }

}
