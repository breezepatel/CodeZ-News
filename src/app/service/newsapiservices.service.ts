import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2f7020c35330452eadc72ac36e38f9b3"
techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=2f7020c35330452eadc72ac36e38f9b3"
businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2f7020c35330452eadc72ac36e38f9b3"

topHeading():Observable<any>{
  return this._http.get(this.newsApiUrl);
}

techNews():Observable<any>{
  return this._http.get(this.techApiUrl);
}

businessNews():Observable<any>{
  return this._http.get(this.businessApiUrl)
}
}
