import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }
GetNews(){

  let apiKey =" https://newsapi.org/v2/top-headlines?sources=news24&apiKey=ba26fa667ad14ac5ba20716d4d0d1bb2"

  return new Promise((resolve,reject) => {
    this.http.get(apiKey).subscribe(data =>{
      resolve(data);
    })
  });
  // return this.http.get(apiKey);
}

}
