import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewsProvider} from '../../providers/news/news';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   article;
   image ;
url;
   arr =[];
  

  constructor(public navCtrl: NavController,private news:NewsProvider) {
    
  // this.news.GetNews().then((data:any) =>{
  //     this.news.GetNews().
  // })


  this.news.GetNews().then((data:any)=>{
    console.log(data);

    this.image=data.articles[0].urlToImage ;
    this.url=data.articles[0].url;


    for (let index = 0; index < 9; index++) {

      this.arr.push(data.articles[index]);
     
      
    }


    
  })
  }
view(){
  
}
  ionViewDidLoad(){
    //  this.news.GetNews()
    // .subscribe(newsList => console.log(newsList));
  }

  View(){
  
  }
  }

