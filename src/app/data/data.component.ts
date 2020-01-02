import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  url = 'https://developers.zomato.com/api/v2.1/categories';
  userkey = 'ca583717def23ba296b47b18b2a9166a';
  data;
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.getData();
  }

  getData(){
 
    return  this.data = this.getCategories().subscribe(res => 
      {
      console.log(res);
      this.data = res;
   });
  }

  getCategories(){
    const headers = new HttpHeaders({
      'user-key': this.userkey,
      });
    return this.http.get(this.url,{headers:headers});
  }

 


}
